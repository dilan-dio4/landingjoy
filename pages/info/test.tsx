import Blog from "../../components/templates/Blog";

export default function test() {
    return (
        <Blog
            title="Zoom landing page breakdown"
            description="This is a description"
            date={new Date("2020-01-10")}
        >
            The world of this is weird
            <h2>Geek</h2>
            <h4>Aasd</h4>
        </Blog>
    )
}