
'use client'
import Head from "next/head"
import Script from 'next/script'
import Image from "next/image"
import Link from "next/link"
import { getMainAddress } from "../../support/support"
import LanguageSelector from "../../elements/LanguageSelector/LanguageSelector"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Spacer from "../../elements/Spacer/Spacer"
import YandexMetrika from "../../elements/YandexMetrika/YandexMetrika"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import styles from "./Header.module.scss"

import "../../_globals.js"

function Header(props) {

    const intl = useIntl();
    const { locale } = useRouter();

    let title;
    let description;

    if (typeof(props.title) == 'function') {
        title = props.title();
    } else {
        title = intl.formatMessage({ id: "meta.title" });
    }

    if (typeof(props.description) == 'function') {
        description = props.description();
    } else {
        description = intl.formatMessage({ id: "meta.description" });
    }

    const h1 = intl.formatMessage({ id: "h1" });
    const features_headline = intl.formatMessage({ id: "features_headline" });
    const HTU_headline = intl.formatMessage({ id: "HTU_headline" });
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const feedback_headline = intl.formatMessage({ id: "feedback_headline" });
    const changelog_headline = intl.formatMessage({ id: "changelog_headline" });
    const articles_headline = intl.formatMessage({ id: "articles_headline" });

    function getMenuItems() {
        let items = [
            {name: h1, url: '#how_it_works'},
            {name: features_headline, url: '#features'},
            {name: HTU_headline, url: '#how_to_use'},
            {name: support_headline, url: '#support'},
            {name: feedback_headline, url: '#feedback'},
            {name: changelog_headline, url: 'changelog'},
            {name: articles_headline, url: 'articles'}
        ]

        return items.map(item => {
            return <li><Link href={getMainAddress(item.url)}>{item.name}</Link></li>
        })
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
                    <meta name="viewport" content="width=device-width , initial-scale=1.0"/>
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>

                    {/* Add hreflang links */}
                    {/*<link rel="alternate" href={host} hrefLang="x-default" />*/}
                    <link rel="alternate" href={getMainAddress('')} hrefLang={locale} />

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
                            <Link className={styles.logo_block} href={getMainAddress('')}>
                                <Image
                                    src="/images/logo.png"
                                    width={36}
                                    height={36}
                                    alt="AveTemp Logo"
                                    className={styles.logo}
                                />
                            </Link>  
                            <div className={props.styles.header_menu}>
                                <ul>{getMenuItems()}</ul>
                            </div>

                            <Spacer styles={props.styles}/>
                            <LanguageSelector styles={props.styles} locales={props.locales}/>
                            <DownloadButton isPrimary/>
                        </div>
                    </div>
                </div>
            </>
      );
}

export default Header;