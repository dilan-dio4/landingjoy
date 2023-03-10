const withSvgr = require('@newhighsco/next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fix dark mode in CSS Modules => https://github.com/tailwindlabs/tailwindcss/issues/3258
  webpack: config => {
    // Find the base rule that contains nested rules (which contains css-loader)
    const rules = config.module.rules.find(r => !!r.oneOf);

    // Interate over the found rules
    rules.oneOf.forEach(loaders => {
      // Focus on the the loaders that have an array of `use` statements
      if (Array.isArray(loaders.use)) {
        // Iterate over each of the loaders
        loaders.use.forEach(l => {
          // Only focus on loaders that are an object and have a `loader` property set to `css-loader`
          if (typeof l !== 'string' && typeof l.loader === 'string' && /(?<!post)css-loader/.test(l.loader)) {
            // If there are no module options originally set, skip this loader
            if (!l.options.modules) return;
            const { getLocalIdent, ...others } = l.options.modules;

            // Create a new options object with the `getLocalIdent` property set to a function
            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName) => {
                  // If the class name is `dark`, return it instead of hashing it
                  if (localName === 'dark') return localName;
                  // Otherwise, call the original function and return the value
                  return getLocalIdent(ctx, localIdentName, localName);
                }
              }
            };
          }
        });
      }
    });

    return config;
  },
  rewrites: () => [
    {
      source: "/pm/lib.min.js",
      destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
    },
    {
      source: "/pm/lib.js",
      destination: "https://cdn.mxpnl.com/libs/mixpanel-2-latest.js",
    },
    {
      source: "/pm/decide",
      destination: "https://decide.mixpanel.com/decide",
    },
    {
      source: "/pm/:slug",
      destination: "https://api.mixpanel.com/:slug",
    }
  ]
}

module.exports = withSvgr({
  ...nextConfig,
  svgrOptions: {
    typescript: true,
    dimensions: false,
    svgo: false
  }
})
