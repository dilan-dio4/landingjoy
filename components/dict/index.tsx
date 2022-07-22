// type IDict = string | ((...strings: string[]) => string) | { [key: string]: IDict };

import Link from "next/link";
import { RiMoneyDollarCircleLine, RiTimeLine, RiEmotion2Line } from 'react-icons/ri';
import type { IconBaseProps } from 'react-icons';

const dict = {
    hero: {
        header: (
            <>
                Your SaaS needs landing pages<span id='beeLineDestination'>&#8203;</span>
                <br />
                and we <span className='font-extrabold'>love</span> building them
            </>
        ),
        subheader: 'Convert & retain your users with pages that make lasting impressions',
        tag: <>Book a strategy call</>,
    },

    section1: {
        // header: "The weight of converting, lifted off your shoulders",
        header: "A SaaS landing page subscription that'll convert quickly",
        triad: [
            {
                title: 'Totally async',
                description: 'We deliver products directly to you',
            },
            {
                title: 'Real-time updates',
                description: 'Our dev environment is accessible to you at all points of the process',
            },
            {
                title: '100% ownership',
                description: 'All design, assets, and code are completely owned by you',
            },
        ],
    },

    section2: {
        header1: <>So&#8230; what&apos;s the catch?</>,
        description1: (
            <>
                We tend to only work with <em>ideal</em> SaaS companies. This is because we have limited time and like to keep a tight, trustworthy team. This
                allows us to be respectful to yourself and other potential clients while delivering the highest quality of work.
                <br />
                <br />
                Consider this a long term relationship.
            </>
        ),

        header2: (
            <>
                What&apos;s an <em>ideal</em> company?
            </>
        ),
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
        description2Subheader: <>To find out if your SaaS is a good fit, <Link href="asdf"><a>book a free strategy call</a></Link>.</>,

        header3: 'You just got a lot leaner',
    },
    pricing: {        
        monthly: {
            buttonOne: 'Get in touch',
            buttonTwo: 'Read the FAQs',
            header: 'Full-stack design + development',
            subheader: 'Pause or cancel at any time',
            cost: '$8,500',
            costSmall: '/ mo',
            included: [
                'UI/UX', 
                'Copywriting', 
                'Animations', 
                'Graphic assets', 
                'Real-time updates', 
                { length: 1, key:"final", component: <small className="font-thin"><em>+ Development services</em></small> }
            ],
        },
        review: {
            buttonOne: 'Get started',
            buttonTwo: 'Book a call',
            header: 'Review my landing pages',
            subheader: 'One-time purchase',
            cost: '$1,000',
            costSmall: '/ one-time',
            included: [
                'Competitor breakdown', 
                'Low-fidelity plan', 
                'Visual assets', 
                'Copy audit', 
                'SEO audit', 
                'ICP research'
            ],
        },
        extraCard: {
            categories: ["Speed", "Quality", "Cost"] as const,
            attributeData: {
                // Order matters
                Speed: {
                    text: 'Get real-time updates on your deliverable tasks with 24-hour access to our development environment.',
                    Icon: (props: IconBaseProps) => <RiTimeLine {...props} />,
                },
                Quality: {
                    text: "All work is done in-house with an emphasis on attention to detail and due diligence. The deliverables are impactful and production-ready.",
                    Icon: (props: IconBaseProps) => <RiEmotion2Line {...props} />,
                },
                Cost: {
                    text: "Forget hiring more designers, developers, and QA. You could save up to $9k every month with our cost-efficient project models.",
                    Icon: (props: IconBaseProps) => <RiMoneyDollarCircleLine {...props} />,
                },
            }
        }
    },
};

export default dict;
