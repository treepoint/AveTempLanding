'use client';
import { useIntl } from "react-intl";
import styles from './Footer.module.scss'
import "../../_globals.js";

function Footer(props) {

    const intl = useIntl();
    const githab_page_headline = intl.formatMessage({ id: "githab_page_headline" });
    const issues_headline = intl.formatMessage({ id: "issues_headline" });
    const discussions_headline = intl.formatMessage({ id: "discussions_headline" });
    const download = intl.formatMessage({ id: "download_button" });

    let currentYear= new Date().getFullYear(); 

    return (
        <div className={props.styles.footer_and_header}>
            <div className={props.styles.footer}>
                <ul>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp" target="_blank" rel="noopener, noreferrer">
                            {githab_page_headline}
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/issues" target="_blank" rel="noopener, noreferrer">
                            {issues_headline}
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/discussions" target="_blank" rel="noopener, noreferrer">
                            {discussions_headline}
                        </a>
                        </li>
                        <li>
                        <a href={download_link} target="_blank" rel="noopener, noreferrer">
                            { download }
                        </a>
                        </li>
                </ul>
                <div className={styles.copyright}>© 2022-{currentYear}, AveTemp. </div>
            </div>
    </div>
    );
}

export default Footer;