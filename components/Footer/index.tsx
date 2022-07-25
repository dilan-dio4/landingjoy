import Link from 'next/link';
import { SmallPrimaryButton } from '../Buttons';
import { useForm } from '@formcarry/react';
import clsx from 'clsx';
import styles from '../../styles/components/Footer.module.css';
import dict from '../dict';

export default function Footer() {
    const { state: formState, submit } = useForm({
        id: 'GjRHZyrwrN',
    });

    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='basis-3/12 py-3 md:py-0 pr-0 md:pr-4'>
                    <div className='flex flex-col justify-start'>
                        <></>
                        <p className='mt-4'>{dict.footer.contact.address}</p>
                        <hr className='my-4' />
                        <p className='mb-1'>
                            <b>{dict.footer.contact.contactUs}</b>
                        </p>
                        <a href={`mailto:${dict.footer.contact.email}`} className='mb-1 text-inherit hover:text-neutral-300 transition'>
                            <p>{dict.footer.contact.email}</p>
                        </a>
                        <a href={`tel:${dict.footer.contact.phoneNumber.replaceAll("", "")}`} className='mb-1 text-inherit hover:text-neutral-300 transition'>
                            <p>{dict.footer.contact.phoneNumber}</p>
                        </a>
                        <Link href='/sitemap.xml'>
                            <a className='mb-1 text-inherit hover:text-neutral-300 transition'>
                                <p>sitemap</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='basis-3/12 py-3 md:py-0 pr-0 md:pr-4'>
                    <div className='flex flex-col justify-start mb-2'>
                        <form onSubmit={submit} acceptCharset='UTF-8'>
                            <p className='mb-3'>
                                <b>{dict.footer.leaveUsAMessage}</b>
                            </p>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <input
                                    className='w-full border border-neutral-600 mb-2 px-2 py-1.5 rounded-lg text-sm text-black'
                                    placeholder='First name'
                                    type='text'
                                    name='name'
                                    id='message-name'
                                    required
                                />
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <input
                                    className='w-full border border-neutral-600 mb-2 p-2 rounded-lg text-sm text-black'
                                    placeholder='Email address'
                                    type='email'
                                    name='email'
                                    id='message-email'
                                    required
                                />
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting}>
                                <textarea
                                    className='w-full border border-neutral-600 mb-2 p-2 rounded-lg text-sm text-black'
                                    placeholder='Type your message here...'
                                    name='message'
                                    id='message-message'
                                    required
                                ></textarea>
                            </fieldset>
                            <fieldset disabled={formState.submitted || formState.submitting} className=''>
                                {!formState.submitted && !formState.submitting ? (
                                    <SmallPrimaryButton
                                        name='submit'
                                        type='submit'
                                        id='message-submit'
                                        data-submit='...Sending'
                                        text='Submit'
                                        className='h-[34px]'
                                        fullWidth
                                    />
                                ) : (
                                    <div
                                        className={clsx(
                                            formState.submitted ? 'bg-green-500' : 'bg-slate-900',
                                            formState.submitted ? 'text-black' : 'text-slate-500',
                                            'rounded-lg h-[34px] flex-center text-sm font-bold',
                                        )}
                                    >
                                        <p>{formState.submitted ? "Thanks, you'll hear back soon!" : `Submitting${String.fromCharCode(8230)}`}</p>
                                    </div>
                                )}
                            </fieldset>
                            <input name='_gotcha' className='hidden' id='message-gotcha' />
                            <input name='type' className='hidden' value='footer-contact' onChange={() => { } /** This to avoid warning */} id='message-type' />
                        </form>
                    </div>
                </div>
                <div className='basis-6/12 py-8 md:py-0 pl-0 md:pl-4 pr-8 sm:pr-0'>
                    <div className={clsx('h-full w-full m-4 shadow-lg rounded-lg', styles['rainbow-block'])}>
                        <div className={clsx('z-10 absolute-center m-0.5 rounded-lg flex-col flex-center', styles['svg-pattern'])}>
                            <p className='text-xl font-bold tracking-tight text-center leading-snug'>{dict.footer.block.content}</p>
                            <div className={clsx(styles['rainbow-block'], '!w-[120px] !h-[40px] mt-9 transition-all hover:-translate-y-0.5')}>
                                <Link href={dict.footer.block.cta.link}>
                                    <button className='bg-secondary-300 absolute-center z-20 rounded-[11px] w-full'>
                                        <span className='text-sm font-bold'>{dict.footer.block.cta.text}</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-4' />
            <div className='flex-center flex-col md:flex-row'>
                <p className='text-sm'>{dict.footer.legal}</p>
            </div>
        </div>
    );
}
