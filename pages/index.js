import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen";
import WhyScreen from "../components/WhyScreen/WhyScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import HowToUseScreen from "../components/HowToUseScreen/HowToUseScreen";

import "../_globals.js";

import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <>
      <HowItWorksScreen styles={styles}/>
      <WhyScreen styles={styles}/>
      <FeatureScreen styles={styles}/>
      <HowToUseScreen styles={styles}/>
    </>
  );
}
