
'use client';

import Image from "next/image";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Spacer from "../Spacer/Spacer";
import { useIntl } from "react-intl";
import "../../_globals.js";

function Header(props) {

    const intl = useIntl();

    const h1 = intl.formatMessage({ id: "h1" });
    const why_headline = intl.formatMessage({ id: "why_headline" });
    const features_headline = intl.formatMessage({ id: "features_headline" });
    const HTU_headline = intl.formatMessage({ id: "HTU_headline" });
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const changelog_headline = intl.formatMessage({ id: "changelog_headline" });
    const download_button = intl.formatMessage({ id: "download_button" });

    return (
            <div className={[props.styles.footer_and_header, props.styles.fixed].join(' ')}>
                <div className={props.styles.header}>
                    <div className={props.styles.header_inner}>
                        <a className={props.styles.logo_block} href={host} rel="noopener">
                            <Image
                                src="/images/logo.png"
                                width="36px"
                                height="36px"
                                alt="AveTemp Logo"
                                className={props.styles.logo}
                            />
                        </a>
                        <div className={props.styles.header_menu}>
                            <ul>
                                <li>
                                    <a href="#how_it_works" rel="noopener">{h1}</a>
                                </li>
                                <li>
                                    <a href="#why" rel="noopener">{why_headline}</a>
                                </li>
                                <li>
                                    <a href="#features" rel="noopener">{features_headline}</a>
                                </li>
                                <li>
                                    <a href="#how_to_use" rel="noopener">{HTU_headline}</a>
                                </li>
                                <li>
                                    <a href="#support" rel="noopener">{support_headline}</a>
                                </li>
                                <li>
                                    <a href="#changelog" rel="noopener">{changelog_headline}</a>
                                </li>
                            </ul>
                        </div>

                        <Spacer styles={props.styles}/>
                        
                        <LanguageSelector styles={props.styles} locales={props.locales}/>

                        <a className={[props.styles.btn, props.styles.btn_danger].join(' ')}
                           href={download_link} 
                           role="button">
                           {download_button}
                        </a>
                    </div>
                </div>
            </div>
      );
}

export default Header;