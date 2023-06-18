import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen";
import WhyScreen from "../components/WhyScreen/WhyScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import HowToUseScreen from "../components/HowToUseScreen/HowToUseScreen";
import FeedbackScreen from "../components/FeedbackScreen/FeedbackScreen";

import "../_globals.js";

import styles from "../styles/Main.module.scss";

export default function Home() {
  return (
    <>
      <HowItWorksScreen styles={styles}/>
      <WhyScreen styles={styles}/>
      <FeatureScreen styles={styles}/>
      <HowToUseScreen styles={styles}/>
      <FeedbackScreen styles={styles}/>
    </>
  );
}
