// type IDict = string | ((...strings: string[]) => string) | { [key: string]: IDict };

const dict = {
    hero: {
        header: <>Your SaaS needs landing pages<span id="beeLineDestination">&#8203;</span><br />and we <span className='font-extrabold'>love</span> building them</>,
        subheader: "and we'll build the whole thing",
        subheader2: "A SaaS landing page subscription that'll convert quickly",
    },

    section1: {
        header: "The weight of converting, lifted off your shoulders",
        triad: [
            {
                title: "Totally async",
                description: "We deliver products directly to you"
            },
            {
                title: "Totally async",
                description: "We deliver products directly to you"
            },
            {
                title: "Totally async",
                description: "We deliver products directly to you"
            }
        ]
    },

    section2: {
        header1: <>So&#8230; what&apos;s the catch?</>,
        description1: (
            <>
                We tend to only work with <em>ideal</em> SaaS companies. This is because we have limited time and like to keep a tight, trustworthy team. This allows us to be respectful to yourself and other potential clients while delivering the highest quality of work.
                <br />
                <br />
                Consider this a long term relationship.
            </>
        ),

        header2: <>What&apos;s an <em>ideal</em> company?</>,
        description2: (
            <>
                An ideal customer is typically defined by the following characteristics:
                <br />
                <br />
            </>
        ),
        bullets2: (
            <>
                1. &nbsp;&nbsp;Has a platform that we believe in
                <br />
                2. &nbsp;&nbsp;Has a team that we mesh with
                <br />
                3. &nbsp;&nbsp;Is excited to scale their growth
            </>
        ),

        header3: "You just got a lot leaner",
    },
    pricing: {
        bookCall: "Book a call",
        getStartedButton: "Get started",
        monthly: {
            header: "Monthly subscription",
            subheader: "Pause or cancel at any time",
            cost: "$0",
            costSmall: "/ mo",
            included: [
                "Trello board",
                "Daily updates",
                "Copywriting",
                "Assets included"
            ]
        },
        review: {
            header: "Review my landing pages",
            subheader: "One-time purchase"
        }
    }
}

export default dict;