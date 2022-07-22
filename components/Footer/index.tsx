import Link from 'next/link';
import { FiLink2 } from 'react-icons/fi';
import {
    IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoNewspaperOutline,
} from 'react-icons/io5';
import { SiCrunchbase } from 'react-icons/si';
import { SmallPrimaryButton } from '../Buttons';
import { useForm } from '@formcarry/react';
import clsx from 'clsx';

export default function Footer() {
    const { state: formState, submit } = useForm({
        id: 'GjRHZyrwrN'
    });


    const resources = [
        {
            "title": "Report an issue",
            "link": "/report-an-issue"
        },
        {
            "title": "Blog",
            "link": "/blog"
        },
        {
            "title": "Github",
            "link": "https://github.com/easybase"
        },
        {
            "title": "Sign In",
            "link": "https://app.easybase.io"
        }
    ]
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="basis-3/12 py-3 md:py-0 pr-0 md:pr-4">
                    <div className="flex flex-col justify-start">
                        <></>
                        <p className="mt-4">4120 Schenley Drive<br />Pittsburgh, PA<br />15260</p>
                        <hr className="my-4" />
                        <p className="mb-1"><b>Contact us</b></p>
                        <a href="mailto:hello@easybase.io" className="text-inherit hover:text-neutral-300 transition"><p>hello@landingjoy.com</p></a>
                        <a href="tel:4129450510" className="text-inherit hover:text-neutral-300 transition"><p>814-503-0670</p></a>
                    </div>
                </div>
                <div className="basis-3/12 py-3 md:py-0 pr-0 md:pr-4">
                    <div className="flex flex-col justify-start">
                        <form onSubmit={submit} acceptCharset="UTF-8">
                            <p className="mb-3"><b>Leave us a message</b></p>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <input className="w-full border border-neutral-600 mb-2 px-2 py-1.5 rounded-lg text-sm text-black" placeholder="First name" type="text" name="name" id="message-name" required />
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <input className="w-full border border-neutral-600 mb-2 p-2 rounded-lg text-sm text-black" placeholder="Email address" type="email" name="email" id="message-email" required />
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <textarea className="w-full border border-neutral-600 mb-2 p-2 rounded-lg text-sm text-black" placeholder="Type your message here..." name="message" id="message-message" required></textarea>
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting} className="">
                                {(!formState.submitted && !formState.submitting) ? (
                                    <SmallPrimaryButton
                                        name="submit"
                                        type="submit"
                                        id="message-submit"
                                        data-submit="...Sending"
                                        text="Submit"
                                        className='h-[34px]'
                                        fullWidth
                                    />
                                ) : (
                                    <div 
                                        className={clsx(
                                            formState.submitted ? "bg-green-500" : "bg-slate-900",
                                            formState.submitted ? "text-black" : "text-slate-500",
                                            " rounded-lg h-[34px] flex items-center justify-center text-sm font-bold",
                                        )}
                                    >
                                        <p>{formState.submitted ? "Thanks, you'll hear back soon!" : `Submitting${String.fromCharCode(8230)}`}</p>
                                    </div>
                                )}
                            </fieldset>
                            <input name="_gotcha" className="hidden" id="message-gotcha" />
                            <input name="type" className="hidden" value="footer-contact" onChange={() => { } /** This to avoid warning */} id="message-type" />
                        </form>
                    </div>
                </div>
                <div className="basis-4/12 py-3 md:py-0 pl-0 md:pl-4">
                    <div className="flex flex-col">
                        <IoNewspaperOutline className="text-3xl mb-7 mt-1" />
                    </div>
                </div>
                <div className="basis-2/12 py-3 md:py-0 pl-0 md:pl-4">
                    <div className="flex flex-col">
                        <FiLink2 className="text-3xl mb-7 mt-1" />
                        {resources.map(ele => (
                            <Link href={ele.link} key={ele.link}>
                                <a className="text-inherit hover:text-neutral-300 transition mb-5">
                                    <p>{ele.title}</p>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="mt-2 mb-4" />
            <div className="flex items-center flex-col md:flex-row">
                <div className="flex basis-1/3 justify-start py-2 md:py-0">
                    {[
                        {
                            icon: <IoLogoTwitter />,
                            link: "https://www.twitter.com/easybase_io"
                        },
                        {
                            icon: <IoLogoLinkedin />,
                            link: "https://www.linkedin.com/company/easybase"
                        },
                        {
                            icon: <IoLogoGithub />,
                            link: "https://www.github.com/easybase"
                        },
                        {
                            icon: <SiCrunchbase />,
                            link: "https://www.crunchbase.com/organization/easybase"
                        }
                    ].map(ele => (
                        <Link key={ele.link} href={ele.link}>
                            <a className="ml-2.5 md:ml-0 mr-2.5 px-5 py-2 md:px-3.5 md:py-1.5 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white rounded-md text-2xl md:text-xl opacity-100 hover:opacity-80 transition">{ele.icon}</a>
                        </Link>
                    ))}
                </div>
                <div className="flex basis-1/3 justify-center py-2 md:py-0">
                    <p className="text-sm">© 2022 LandingJoy Inc.</p>
                </div>
                <div className="flex basis-1/3 justify-end py-2 md:py-0">
                    {[
                        {
                            text: "Sitemap",
                            link: "/sitemap.xml"
                        },
                        {
                            text: "Terms",
                            link: "/terms"
                        },
                        {
                            text: "Privacy",
                            link: "/privacy"
                        }
                    ].map(ele => (
                        <Link key={ele.link} href={ele.link}>
                            <a className="ml-2.5 md:ml-0 mr-2.5 text-white dark:text-black rounded-md opacity-100 hover:opacity-80 transition text-sm">
                                <p>{ele.text}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
