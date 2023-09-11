'use client';
import { useIntl } from "react-intl"
import Link from "next/link";
import styles from './Footer.module.scss'
import "../../_globals.js"

function Footer() {

    const intl = useIntl();
    const githab_page_headline = intl.formatMessage({ id: "githab_page_headline" });
    const issues_headline = intl.formatMessage({ id: "issues_headline" });
    const discussions_headline = intl.formatMessage({ id: "discussions_headline" });
    const download = intl.formatMessage({ id: "download_button" });

    let currentYear= new Date().getFullYear(); 

    function getFooterMenu() {
        let items = [
            {url: "https://github.com/treepoint/AveTemp", text : githab_page_headline},
            {url: "https://github.com/treepoint/AveTemp/issues", text : issues_headline},
            {url: "https://github.com/treepoint/AveTemp/discussions", text : discussions_headline}
        ]

        return items.map((item, index) => {
            return <li key={index}><Link href={item.url}>{item.text}</Link></li>
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <ul>
                    {getFooterMenu()}
                </ul>
                <div className={styles.copyright}>© 2022-{currentYear}, AveTemp. </div>
            </div>
    </div>
    );
}

export default Footer;