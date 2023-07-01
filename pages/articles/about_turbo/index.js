import Screen from "../../../elements/Screen/Screen.js";
import WhyScreen from "../../../components/WhyScreen/WhyScreen.js";
import DownloadButton from "../../../elements/DownloadButton/DownloadButton.js";
import { useIntl } from "react-intl";

import styles from "../../../styles/Main.module.scss";

import "../../../_globals.js";

About_turbo.title = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.title_about_turbo" });
}

About_turbo.description = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.description_about_turbo" });
}

export default function About_turbo() {
  const intl = useIntl();

  const about_turbo_header = intl.formatMessage({ id: "about_turbo_header" });
  const alt_cpu_turbo = intl.formatMessage({ id: "alt_cpu_turbo" });
  const alt_p_vs_f = intl.formatMessage({ id: "alt_p_vs_f" });
  const at_1 = intl.formatMessage({ id: "at_1" });
  const at_2 = intl.formatMessage({ id: "at_2" });
  const at_3 = intl.formatMessage({ id: "at_3" });
  const at_4 = intl.formatMessage({ id: "at_4" });
  const at_5 = intl.formatMessage({ id: "at_5" });
  const at_how_to_avoid = intl.formatMessage({ id: "at_how_to_avoid" });

  function getFirstMainContent() {
    return (<>
    <p>{at_1}</p>
    <p>{at_2}</p>
    <p>{at_3}</p>
    </>);
  }

  function getSecondMainContent() {
    return (<>
    <p>{at_4}</p>
    <p>{at_5}</p>
    </>);
  }

  return (
    <>
      <Screen name={"about_turbo"} 
                    h1={about_turbo_header} 
                    styles={styles} 
                    reverse={true}
                    columns={2} 
                    main_content={getFirstMainContent()}
                    image={"/images/cpu_turbo.jpg"}
                    alt={alt_cpu_turbo}
                    image_style={{maxHeight: "298px", height: "298px", maxWidth: "100%", width: "100%"}}
                    image_priority={100}
                    />

        <Screen name={"about_turbo"} 
                    styles={styles} 
                    reverse={false}
                    columns={2} 
                    main_content={getSecondMainContent()}
                    image={"/images/p_vs_f.png"}
                    alt={alt_p_vs_f}
                    image_style={{maxHeight: "378px", height: "298px", maxWidth: "100%", width: "100%", minWidth: "none"}}
                    image_priority={100}
        />

        <WhyScreen 
            styles={styles} 
            h2={at_how_to_avoid} 
        />
        {<DownloadButton isCentered/>}
    </>
  );
}
