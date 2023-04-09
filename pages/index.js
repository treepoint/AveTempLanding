import Head from "next/head";
import Header from "../components/Header/Header";
import Updating_message from "../components/Updating_message/Updating_message";
import AboutScreen from "../components/AboutScreen/AboutScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import Changelog from "../components/Changelog/Changelog";
import Footer from "../components/Footer/Footer";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import "../_globals.js";

import styles from "../styles/Home.module.css";

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
  }

  function extenedMainClass() {
    if (isThereNewUpdate()) {
      return styles.extended;
    }
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href={host} hrefLang="x-default" />
        <link rel="alternate" href={host+"/en"} hrefLang="en" />
        <link rel="alternate" href={host+"/ru"} hrefLang="ru" />
      </Head>

      <Header styles={styles} locales = {[...locales]}/>
      <Updating_message styles={styles} visible={isThereNewUpdate()}/>

      <main dir={dir} className={[styles.main, extenedMainClass()].join(' ')}>
        <AboutScreen styles={styles}/>
        <FeatureScreen styles={styles}/>
        <Changelog styles={styles} locales = {[...locales]}/>
      </main>

      <Footer styles={styles} locales = {[...locales]}/>
    </div>
  );
}
