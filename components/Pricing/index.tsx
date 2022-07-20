import { SmallPrimaryButton } from '../Buttons';
import Link from 'next/link';
import clsx from 'clsx';
import anime from 'animejs';
import useAsyncEffect from 'use-async-effect';
import dict from '../dict';

interface ISinglePriceCard {
    header: string;
    subheader: string;
    cost: string;
    costSmall: string;
    included: string[];
}

function SinglePriceCard(props: ISinglePriceCard) {
    return (
        <>
            <span className='flex justify-center items-end mb-3'>
                <h4 className='text-2xl mr-[4px] font-bold'>{props.cost}</h4>
                <small className='font-thin text-lg'>{props.costSmall}</small>
            </span>
            <SmallPrimaryButton text={dict.pricing.getStartedButton} className='min-w-[150px] px-[24px] py-[10px]' />
            <Link href='asdf'>
                <a className='block mt-5 text-sm underline tracking-tight italic hover:text-neutral-600'>{dict.pricing.bookCall}</a>
            </Link>
            {props.included.map((ele, i, arr) => (
                <p key={ele} className={clsx(i === 0 && 'mt-8', i + 1 !== arr.length && 'border-b', 'text-sm border-[#1f2d3d20] dark:border-[#fcd5ce20] py-2 mx-12 font-semibold')}>
                    {ele}
                </p>
            ))}
        </>
    )
}

export default function Pricing() {
    function animate() {
        anime({
            targets: '#pricing-grid > div',
            scale: [
                { value: 0.8, easing: 'easeOutSine', duration: 300 },
                { value: 1, easing: 'easeInOutQuad', duration: 500 },
            ],
            opacity: [
                { value: 0, easing: 'easeOutSine', duration: 100 },
                { value: 0.5, easing: 'easeOutSine', duration: 200 },
                { value: 1, easing: 'easeInOutQuad', duration: 500 },
            ],
            delay: anime.stagger(185, { grid: [3, 3], from: 'first' }),
        });
    }
    useAsyncEffect(() => {
        const observer = new IntersectionObserver(
            function (entries) {
                // isIntersecting is true when element and viewport are overlapping
                // isIntersecting is false when element and viewport don't overlap
                if (entries[0].isIntersecting === true) {
                    observer.disconnect();
                    animate();
                }
            },
            { threshold: 0 },
        );

        observer.observe(document.getElementById('pricing-grid')!);
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-[2px] rounded-md overflow-hidden mx-0 lg:mx-36' id='pricing-grid'>
            {/** https://colordesigner.io/gradient-generator */}
            <div className='bg-[#fcd5ceCA] dark:bg-[#243446ca] plan-grid-ele py-[40px] flex flex-col justify-center order-1 sm:order-none'>
                <h4>{dict.pricing.monthly.header}</h4>
                <p className='text-xs'>{dict.pricing.monthly.subheader}</p>
                <h4>&#8595;</h4>
            </div>
            <div className='bg-[#fdcdc4CA] dark:bg-[#213041ca] plan-grid-ele py-[40px] flex flex-col justify-center order-3 sm:order-none'>
                <h4>{dict.pricing.review.header}</h4>
                <p className='text-xs'>{dict.pricing.review.subheader}</p>
                <h4>&#8595;</h4>
            </div>
            <div className='row-span-3 bg-[#fec5baCA] dark:bg-[#1f2d3dca] plan-grid-ele order-5 sm:order-none'></div>
            <div className='bg-[#fdcdc4CA] dark:bg-[#213041ca] plan-grid-ele pt-[30px] pb-[60px] order-2 sm:order-none'>
                <SinglePriceCard {...dict.pricing.monthly} />
            </div>
            <div className='bg-[#fdcdc4CA] dark:bg-[#213041ca] plan-grid-ele pt-[30px] order-4 sm:order-none'>
                <SinglePriceCard {...dict.pricing.monthly} />
            </div>
            <div className='col-span-1 sm:col-span-2 bg-[#fec5baCA] dark:bg-[#1f2d3dca] plan-grid-ele py-[90px] order-6 sm:order-none'></div>
        </div>
    );
}
