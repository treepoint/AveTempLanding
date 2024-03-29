
'use client'
import Head from "next/head"
import LanguageSelector from "../../elements/LanguageSelector/LanguageSelector"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Spacer from "../../elements/Spacer/Spacer"
import YandexMetrika from "../../elements/YandexMetrika/YandexMetrika"
import GoogleTags from "../../elements/GoogleTags/GoogleTags"
import YandexAD from "../../elements/YandexAD/YandexAD"
import Logo from "../../elements/Logo/Logo"
import Menu from "../Menu/Menu"
import { getCanonicalURL, getAlternateURL } from "../../support/support"

import { useSelector } from 'react-redux'
import { selectMenu } from '../../store/features/menuSlice'

import { useIntl } from "react-intl"
import styles from "./Header.module.scss"

import "../../_globals.js"

function Header(props) {
    const intl = useIntl();

    let menu = useSelector(selectMenu);

    let title;
    let description;

    if (typeof(props.title) == 'function') {
        title = intl.formatMessage(props.title());
    } else if (typeof(props.title) == 'object') {
        title = props.title.value;
    } else {
        title = intl.formatMessage({ id: "meta.title" });
    }

    if (typeof(props.description) == 'function') {
        description = intl.formatMessage(props.description());
    } else if (typeof(props.description) == 'object') {
        description = props.description.value;
    } else {
        description = intl.formatMessage({ id: "meta.description" });
    }

    return (
            <>
                <GoogleTags/>
                <YandexAD/>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width , initial-scale=1.0"/>
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                    <link type="image/png" sizes="120x120" rel="icon" href="/favicon-120x120.png"/>

                    {/* Add hreflang links */}
                    {getAlternateURL()}
                    {getCanonicalURL()}
                </Head>
                <YandexMetrika yid={91976312}/>

                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <Logo/> 
                        <Menu locale={props.locale} menu={menu}/>
                        <Spacer/>
                        <LanguageSelector locales={props.locales}/>
                        <DownloadButton isPrimary/>
                        <Menu isMobile locale={props.locale} menu={menu}/>
                    </div>
                </div>
            </>
      );
}

export default Header;