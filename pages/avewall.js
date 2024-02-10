import HowItWorksScreen from "../components/HowItWorksScreen/HowItWorksScreen"
import { useIntl } from "react-intl";

import "../_globals.js";

export default function AveWall() {
  const intl = useIntl();
  const main_h1 =  intl.formatMessage({ id: "main_h1" });

  return (
    <>
      <h1>{main_h1}</h1>
      <HowItWorksScreen/>
    </>
  );
}
