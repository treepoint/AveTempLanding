import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen";
import WhyScreen from "../components/WhyScreen/WhyScreen";
import FeatureScreen from "../components/FeatureScreen/FeatureScreen";
import HowToUseScreen from "../components/HowToUseScreen/HowToUseScreen";
import FeedbackScreen from "../components/FeedbackScreen/FeedbackScreen";
import { useIntl } from "react-intl";

import "../_globals.js";

export default function Home() {
  const intl = useIntl();
  const main_h1 =  intl.formatMessage({ id: "main_h1" });

  return (
    <>
      <h1>{main_h1}</h1>
      <HowItWorksScreen/>
      <WhyScreen/>
      <FeatureScreen/>
      <HowToUseScreen/>
      <FeedbackScreen/>
    </>
  );
}
