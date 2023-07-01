
'use client'
import Head from "next/head"
import LanguageSelector from "../../elements/LanguageSelector/LanguageSelector"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Spacer from "../../elements/Spacer/Spacer"
import YandexMetrika from "../../elements/YandexMetrika/YandexMetrika"
import GoogleTags from "../../elements/GoogleTags/GoogleTags"
import Logo from "../../elements/Logo/Logo"
import Menu from "../Menu/Menu"
import { getCanonicalURL, getAlternateURL } from "../../support/support"
import { getMainAddress } from "../../support/support"
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

    return (
            <>
                <GoogleTags/>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width , initial-scale=1.0"/>
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                    <link type="image/png" sizes="120x120" rel="icon" href="/favicon-120x120.png"/>

                    {/* Add hreflang links */}
                    {getAlternateURL()}
                    {getCanonicalURL()}

                    <YandexMetrika yid={91976312}/>
                </Head>

                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <Logo/> 
                        <Menu />
                        <Spacer/>
                        <LanguageSelector locales={props.locales}/>
                        <DownloadButton isPrimary/>
                        <Menu isMobile/>
                    </div>
                </div>
            </>
      );
}

export default Header;