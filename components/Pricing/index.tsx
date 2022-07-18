import { SmallPrimaryButton } from "../Buttons"
import Link from "next/link"
import clsx from 'clsx';
import anime from "animejs";
import useAsyncEffect from "use-async-effect";

export default function Pricing() {
    function animate() {
        anime({
            targets: '#pricing-grid > div',
            scale: [
                { value: .6, easing: 'easeOutSine', duration: 300 },
                { value: 1, easing: 'easeInOutQuad', duration: 1000 }
            ],
            opacity: [
                { value: 0, easing: 'easeOutSine', duration: 300 },
                { value: 1, easing: 'easeInOutQuad', duration: 1000 }
            ],
            delay: anime.stagger(170, { grid: [3, 3], from: 'first' })
        });
    }
    useAsyncEffect(() => {
        const observer = new IntersectionObserver(function(entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if(entries[0].isIntersecting === true) {
                observer.disconnect();
                animate()
            }
        }, { threshold: 0 });

        observer.observe(document.getElementById("pricing-grid")!);
    }, [])

    return (
        <div className="grid grid-cols-3 gap-[2px] rounded-md overflow-hidden mx-0 lg:mx-36" id="pricing-grid">
            {/** https://colordesigner.io/gradient-generator */}
            <div className='bg-[#fcd5ceCA] plan-grid-ele py-[40px] flex flex-col justify-center'>
                <h4>Monthly subscription</h4>
                <p className='text-xs'>Pause or cancel at any time</p>
                <h4>&#8595;</h4>
            </div>
            <div className='bg-[#fdcdc4CA] plan-grid-ele py-[40px] flex flex-col justify-center'>
                <h4>Review my landing pages</h4>
                <p className='text-xs'>One-time purchase</p>
                <h4>&#8595;</h4>
            </div>
            <div className='row-span-3 bg-[#fec5baCA] plan-grid-ele'>

            </div>
            <div className='bg-[#fdcdc4CA] plan-grid-ele pt-[30px] pb-[60px]'>
                <span className="flex justify-center items-end mb-3">
                    <h4 className="text-2xl mr-[4px] font-bold">
                        $0
                    </h4>
                    <small className="font-thin text-lg">/ {"mo"}</small>
                </span>
                <SmallPrimaryButton text="Get started" className="min-w-[150px] px-[24px] py-[10px]" />
                <Link href="asdf"><a className='block mt-5 text-sm underline tracking-tight italic hover:text-neutral-600'>Book a call</a></Link>
                {[
                    "Trello board",
                    "Daily updates",
                    "Copywriting",
                    "Assets included"
                ].map((ele, i, arr) => (
                    <p
                        key={ele}
                        className={clsx(
                            i === 0 && "mt-8",
                            i + 1 !== arr.length && "border-b",
                            'text-sm border-[#1f2d3d20] py-2 mx-12 font-semibold'
                        )}
                    >
                        {ele}
                    </p>
                ))}
            </div>
            <div className='bg-[#fdcdc4CA] plan-grid-ele py-[150px]'>

            </div>
            <div className='col-span-2 bg-[#fec5baCA] plan-grid-ele py-[90px]'>

            </div>
        </div >
    )
}