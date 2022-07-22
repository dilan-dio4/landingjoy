import { SmallPrimaryButton } from '../Buttons';
import Link from 'next/link';
import clsx from 'clsx';
import anime from 'animejs';
import dict from '../dict';
import React, { useRef, useState, useEffect, ReactNode, Fragment } from 'react';
import styles from '../../styles/components/Pricing.module.css';
import AnimatedBall from '../AnimatedBall';

function SinglePriceCard(props: typeof dict.pricing["monthly" | "review"]) {
    return (
        <>
            <span className='flex justify-center items-end mb-3'>
                <h4 className='text-2xl mr-[4px] font-bold'>{props.cost}</h4>
                <small className='font-thin text-lg'>{props.costSmall}</small>
            </span>
            <SmallPrimaryButton text={props.buttonOne} className='min-w-[150px] px-[24px] py-[10px]' />
            <Link href='asdf'>
                <a className='block mt-5 text-sm underline tracking-tight italic hover:text-neutral-600'>{props.buttonTwo}</a>
            </Link>
            {props.included.sort((a, b) => b.length - a.length).map((ele, i, arr) => (
                <p key={typeof ele === "string" ? ele : ele.key} className={clsx(i === 0 && 'mt-8', i + 1 !== arr.length && 'border-b', 'text-sm border-[#1f2d3d20] dark:border-[#fcd5ce20] py-2 mx-12 font-semibold')}>
                    {typeof ele === "string" ? ele : ele.component}
                </p>
            ))}
        </>
    )
}

export default function Pricing() {
    const attributes = dict.pricing.extraCard.categories;
    type SingleAttribute = typeof attributes[number];
    const [selectedAttribute, setSelectedAttribute] = useState<SingleAttribute>(attributes[0]);
    const autoSwitchTriRef = useRef<NodeJS.Timer>();

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
            delay: anime.stagger(185, { grid: [2, 3], from: 'first' }),
        });
    }
    useEffect(() => {
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

        autoSwitchTriRef.current = setInterval(() => {
            setSelectedAttribute(prev => {
                const indexOfNew = attributes.indexOf(prev) + 1;
                if (indexOfNew > attributes.length - 1) {
                    return attributes[0];
                } else {
                    return attributes[indexOfNew];
                }
            })
        }, 5000)

        return () => clearInterval(autoSwitchTriRef.current);
    }, []);

    function handleTriClick(ele: SingleAttribute) {
        clearInterval(autoSwitchTriRef.current);
        setSelectedAttribute(ele);
    }

    useEffect(() => {
        const activeIndex = attributes.indexOf(selectedAttribute);
        anime({
            targets: [`#tri-icon-${activeIndex}`, `#tri-text-${activeIndex}`],
            duration: 650,
            easing: 'easeInOutQuad',
            opacity: 0.9
        });
        for (let i = 0; i < attributes.length; i++) {
            if (i === activeIndex) {
                continue;
            }
            anime({
                targets: [`#tri-icon-${i}`, `#tri-text-${i}`],
                duration: 650,
                easing: 'easeInOutQuad',
                opacity: 0
            })
        }
    }, [selectedAttribute])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[2px] rounded-md overflow-hidden mx-0 lg:mx-36 z-30' id='pricing-grid'>
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
            <div className='bg-[#fdcdc4CA] dark:bg-[#213041ca] plan-grid-ele pt-[40px] pb-[60px] order-2 sm:order-none'>
                <SinglePriceCard {...dict.pricing.monthly} />
            </div>
            <div className='bg-[#fdcdc4CA] dark:bg-[#213041ca] plan-grid-ele pt-[40px] pb-[60px] order-4 sm:order-none'>
                <SinglePriceCard {...dict.pricing.review} />
            </div>
            <div className='col-span-1 sm:col-span-2 bg-[#fec5baCA] dark:bg-[#1f2d3dca] plan-grid-ele order-5 sm:order-none'>
                <div className='w-full h-full border-[2px] border-[#1f2d3d20] dark:border-[#fcd5ce20] rounded-b-md flex flex-col items-center sm:pl-20 py-5 relative overflow-hidden'>
                    <AnimatedBall className='w-48 absolute left-[-40px] bottom-[-100px] sm:bottom-[unset] sm:top-[-40px]' />
                    {Object.values(dict.pricing.extraCard.attributeData).map(({ Icon, text }, i) => (
                        <div key={text.slice(0, 10)} className='rounded-[50%] bg-primary-300 dark:bg-secondary-300 p-2 absolute bottom-3 sm:bottom-[unset] sm:top-3 right-3' id={`tri-icon-${i}`} style={{ opacity: 0 }}>
                            <Icon size={30} />
                        </div>
                    ))}
                    <div className='flex justify-center'>
                        {attributes.map((ele, i) => (
                            <Fragment key={ele}>
                                <button
                                    className={clsx(
                                        'font-semibold transition-all duration-300',
                                        ele === selectedAttribute ?
                                            styles['selectedTriColor']
                                            :
                                            styles['rootTriColor'],
                                        ele === selectedAttribute ?
                                            "text-secondary-200 dark:text-primary-100"
                                            :
                                            "text-gray-600"
                                    )}
                                    onClick={_ => handleTriClick(ele)}
                                >
                                    {ele}
                                </button>
                                {i + 1 !== attributes.length && <p className='text-2xl mx-2 font-bold'>/</p>}
                            </Fragment>
                        ))}
                    </div>
                    <div className='h-32 sm:h-8 relative w-full mt-5'>
                        {Object.values(dict.pricing.extraCard.attributeData).map(({ text }, i) => (
                            <p id={`tri-text-${i}`} key={text.slice(0, 10)} className='tracking-wide text-xs absolute mx-8 sm:mx-28 text-center' style={{ opacity: 0 }}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
