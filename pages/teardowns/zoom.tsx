import Teardown from "../../components/templates/Teardown";
import zoomImage from '../../assets/teardown-images/zoom.png'

export default function test() {
    return (
        <Teardown
            platform="Zoom"
            description="Zoom is a very popular video conferencing application that gained a lot of popularity during the COVID-19 pandemic."
            date={new Date("2020-01-10")}
            notes={[]}
            siteImage={zoomImage}
            topChildren={(
                <p>
                    Zoom is a very popular video conferencing application that gained a lot of popularity during the COVID-19 pandemic.
                    Today, Zoom is so popular that the word "Zoom" is colloquially understood by many as video chatting in regards to
                    work or school.
                    <br />
                    <br />
                    When we analyze Zoom's landing page, we have to go in with the context that Zoom knows how far their brand has spread.
                    Small/medium size SaaS companies have to <em>teach</em> potential users what their product is, how it functions, and what pain
                    it solves.
                    <br />
                    <br />
                    <b>Zoom does not have to do this.</b> The overwhelming amount of users who head to Zoom's landing page are already familiar with the service.
                    We'll dive into this further as we seen their landing page marketing tactics.
                    <br />
                    <br />
                    <b>Let's breakdown the pros and cons of their landing page. The ranking out of 5 stars is available on the bottom of the page! Scroll down to continue.</b>
                </p>
            )}
            score={3.5}
        />
    )
}