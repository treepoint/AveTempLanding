import Head from "next/head";
import Script from 'next/script'
import Header from "../components/Header/Header";
import Updating_message from "../components/Updating_message/Updating_message";
import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen";
import WhyScreen from "../components/WhyScreen/WhyScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import HowToUseScreen from "../components/HowToUseScreen/HowToUseScreen";
import Changelog from "../components/Changelog/Changelog";
import Footer from "../components/Footer/Footer";
import YandexMetrika from "../components/YandexMetrika/YandexMetrika";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import "../_globals.js";

import styles from "../styles/Main.module.css";

export default function Home({ dir }) {
  const { locales } = useRouter();

  const intl = useIntl();
  const title = intl.formatMessage({ id: "meta.title" });
  const description = intl.formatMessage({ id: "meta.description" });

  function isThereNewUpdate() {
      const date = new Date(); 
      let month = date.getMonth()

      if (month == 3 ) {
          return true;
      } 

      return true;
  }

  function extenedMainClass() {
    if (isThereNewUpdate()) {
      return styles.extended;
    }
  }

  return (
    <div>
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

      <Header styles={styles} locales = {[...locales]}/>
      <Updating_message styles={styles} visible={isThereNewUpdate()}/>

      <main dir={dir} className={[styles.main, extenedMainClass()].join(' ')}>
        <HowItWorksScreen styles={styles}/>
        <WhyScreen styles={styles}/>
        <FeatureScreen styles={styles}/>
        <HowToUseScreen styles={styles}/>
        <Changelog styles={styles} locales = {[...locales]}/>
      </main>

      <Footer styles={styles} locales = {[...locales]}/>
    </div>
  );
}
