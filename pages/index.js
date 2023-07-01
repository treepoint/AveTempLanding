import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen";
import WhyScreen from "../components/WhyScreen/WhyScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import HowToUseScreen from "../components/HowToUseScreen/HowToUseScreen";
import FeedbackScreen from "../components/FeedbackScreen/FeedbackScreen";

import "../_globals.js";

export default function Home() {
  return (
    <>
      <h1>AveTemp — программа для уменьшения нагрева процессора</h1>
      <HowItWorksScreen/>
      <WhyScreen/>
      <FeatureScreen/>
      <HowToUseScreen/>
      <FeedbackScreen/>
    </>
  );
}
