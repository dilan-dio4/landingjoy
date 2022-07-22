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
                    className={clsx(styles['faqs-details'], 'bg-primary-100 dark:bg-neutral-900 transition-colors duration-300 relative border-[1px] border-solid border-primary-300 dark:border-secondary-300 max-w-[820px]')}
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
                    <div className={styles['d-f']}>{ele.content}</div>
                </details>
            ))}
        </div>
    );
}
