
import Header from "../Header/Header";
import Updating_message from "../Updating_message/Updating_message";
import Footer from "../Footer/Footer";

import { useRouter } from "next/router";
import "../../_globals.js";

import styles from "../../styles/Main.module.css";

export default function Layout(props) {
  const { locales } = useRouter();

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
      <Header styles={styles} locales = {[...locales]}/>
      <Updating_message styles={styles} visible={isThereNewUpdate()}/>

      <main dir={props.dir} className={[styles.main, extenedMainClass()].join(' ')}>
       {props.children}
      </main>

      <Footer styles={styles} locales = {[...locales]}/>
    </div>
  );
}
