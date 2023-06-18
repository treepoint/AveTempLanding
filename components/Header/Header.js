
'use client';

import Head from "next/head";
import Script from 'next/script'
import Image from "next/image";
import LanguageSelector from "../../elements/LanguageSelector/LanguageSelector";
import Spacer from "../../elements/Spacer/Spacer";
import YandexMetrika from "../../elements/YandexMetrika/YandexMetrika";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import "../../_globals.js";

function Header(props) {

    const intl = useIntl();
    const { locale } = useRouter();

    const title = intl.formatMessage({ id: "meta.title" });
    const description = intl.formatMessage({ id: "meta.description" });

    const h1 = intl.formatMessage({ id: "h1" });
    const features_headline = intl.formatMessage({ id: "features_headline" });
    const HTU_headline = intl.formatMessage({ id: "HTU_headline" });
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const feedback_headline = intl.formatMessage({ id: "feedback_headline" });
    const changelog_headline = intl.formatMessage({ id: "changelog_headline" });
    const about_turbo_headline = intl.formatMessage({ id: "about_turbo_headline" });

    const download_button = intl.formatMessage({ id: "download_button" });

    function getMainAddress(url) {
        if (url.includes("#")) {
            return "/"+locale+url;
        }

        return "/"+locale+"/"+url;
    }

    return (
            <>
                {/* Google tag (gtag.js) */}
                    <Script 
                    src="https://www.googletagmanager.com/gtag/js?id=G-1D8PFXBZ8V" 
                    strategy="afterInteractive"/>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-1D8PFXBZ8V');
                    `}
                </Script>
                <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width , initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>

                {/* Add hreflang links */}
                <link rel="alternate" href={host} hrefLang="x-default" />
                <link rel="alternate" href={host+"/en"} hrefLang="en" />

                <YandexMetrika 
                    yid={91976312}
                    clickmap={true}
                    trackLinks={true}
                    accurateTrackBounce={true}
                    webvisor={true}
                />
                </Head>

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
                                        <a href={getMainAddress("#how_it_works")} rel="noopener">{h1}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("#features")} rel="noopener">{features_headline}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("#how_to_use")} rel="noopener">{HTU_headline}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("#support")} rel="noopener">{support_headline}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("#feedback")} rel="noopener">{feedback_headline}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("changelog")} rel="noopener">{changelog_headline}</a>
                                    </li>
                                    <li>
                                        <a href={getMainAddress("about_turbo")} rel="noopener">{about_turbo_headline}</a>
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
            </>
      );
}

export default Header;