'use client'
import { useIntl } from "react-intl"
import Image from "next/image"
import Link from "next/link"
import styles from './Support.module.scss'

function Support() {

    const intl = useIntl();
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const support_text = intl.formatMessage({ id: "support_text" });

    function getCards() {
        let cards = [
            { currency: 'USD', number: '4278 3100 2282 7059'},
            { currency: 'UZS', number: '8600 4904 8192 1298'},
            { currency: 'RUB', number: '2202 2023 3862 1422'},
        ];

        return cards.map(card => {
            return <div className={styles.list_item}>
                        <div className={styles.currency}>
                            {card.currency}
                        </div>
                        <div className={styles.card_number}>
                            {card.number}
                        </div>
                    </div>
        })
    }

    return (
        <div className={styles.wrapper}>
            <h3 id="support" className={styles.centered_elem}>
                {support_headline} 
                <Image alt="support AveTemp icon" src="/images/heart_icon.png" width={32.5} height={22}/>
                AveTemp
            </h3>
            <p className={styles.centered_elem}>
                {support_text}
            </p>

            <div className={[styles.donate_list, styles.centered].join(' ')}>
                <Link href="https://boosty.to/paul_khoziashev">
                    <Image 
                        alt="support AveTemp icon" 
                        src="/images/boosty_128.png" 
                        width={56} 
                        height={56}
                    />
                </Link>
                <Link href="https://www.patreon.com/paul_khoziashev">
                    <Image 
                        alt="support AveTemp icon" 
                        src="/images/patreon_128.png" 
                        width={56} 
                        height={56}
                    />
                </Link>
            </div>

            <div className={styles.currency_list}>
                {getCards()}
            </div>
        </div>
    );
}

export default Support;