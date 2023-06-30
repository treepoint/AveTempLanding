
import Header from "../Header/Header"
import Updating_message from "../../elements/Updating_message/Updating_message"
import Footer from "../Footer/Footer"

import { useRouter } from "next/router"
import "../../_globals.js"

import styles from "./Layout.module.scss"
import main_styles from "../../styles/Main.module.scss"

export default function Layout(props) {
  const { locales } = useRouter();

  function extenedMainClass() {
      return styles.extended;
  }

  return (
    <>
      <Header 
        styles={main_styles} 
        locales = {[...locales]} 
        title={props.title}
        description={props.description}
      />
      <Updating_message isVisible/>

      <main dir={props.dir} className={[styles.main, extenedMainClass()].join(' ')}>
        {props.children}
      </main>

      <Footer styles={main_styles} locales = {[...locales]}/>
    </>
  );
}
