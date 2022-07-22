import dict from '../dict';
import styles from '../../styles/components/FAQs.module.css';
import clsx from 'clsx';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

export default function FAQs() {
    return (
        <div>
            {dict.FAQs.map((ele) => (
                <details
                    key={ele.summary}
                    className={clsx(styles['faqs-details'], 'bg-neutral-900 relative text-white border-[1px] border-solid border-neutral-800 max-w-[820px]')}
                >
                    <summary className={clsx(styles['faqs-summary'], 'text-md md:text-xl leading-snug')}>
                        {ele.summary}
                        <IoChevronDown
                            className={clsx(styles['faqs-control-icon-expand'], styles['faqs-control-icon'], 'ml-4')}
                            width='24'
                            height='24'
                            role='presentation'
                        />
                        <IoChevronUp
                            className={clsx(styles['faqs-control-icon-close'], styles['faqs-control-icon'], 'ml-4')}
                            width='24'
                            height='24'
                            role='presentation'
                        />
                    </summary>
                    <br />
                    {ele.content}
                </details>
            ))}
        </div>
    );
}
