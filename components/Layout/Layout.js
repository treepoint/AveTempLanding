
import Header from "../Header/Header"
import Updating_message from "../../elements/Updating_message/Updating_message"
import Footer from "../Footer/Footer"
import AD from "../../elements/AD/AD"
import DownloadWindow from "../../components/DownloadWindow/DownloadWindow"

import { useRouter } from "next/router"
import "../../_globals.js"

import styles from "./Layout.module.scss"

export default function Layout(props) {
  const { locales } = useRouter();
  const { locale } = useRouter();

  return (
    <>
      <Header 
        locales = {[...locales]} 
        locale = {locale}
        title={props.title}
        description={props.description}
      />
      <Updating_message isVisible/>
      <main dir={props.dir} className={styles.main}>
        {props.children}
        <AD/>
      </main>
      <Footer locales = {[...locales]}/>
      <DownloadWindow/>
    </>
  );
}
