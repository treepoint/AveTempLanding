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
        
        {/* Yandex Metrika */}
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
          
                ym(91976312, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
              `,
            }}
          />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/91976312" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1D8PFXBZ8V"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'G-1D8PFXBZ8V');
              `,
            }}
          />

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
