import Screen from "../../../elements/Screen/Screen.js"
import Link from "next/link.js"
import { getMainAddress } from "../../../support/support.js"
import HowItWorksScreen from "../../../components/HowItWorksScreen/HowItWorksScreen.js"
import { useIntl } from "react-intl"

import "../../../_globals.js";

NoizyNotebook.title = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.title_notebook_noisy" });
}

NoizyNotebook.description = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.description_notebook_noisy" });
}

export default function NoizyNotebook() {
  const intl = useIntl();

  const noizy_ntb = intl.formatMessage({ id: "noizy_ntb" });

  const alt_noizy_ntb = intl.formatMessage({ id: "alt_noizy_ntb" });
  const nntb_1 = intl.formatMessage({ id: "nntb_1" });
  const nntb_2 = intl.formatMessage({ id: "nntb_2" });
  const nntb_3 = intl.formatMessage({ id: "nntb_3" });
  const about_turbo_header = intl.formatMessage({ id: "about_turbo_header" });

  const alt_noizy_ntb_2 = intl.formatMessage({ id: "alt_noizy_ntb_2" });
  const nntb_4 = intl.formatMessage({ id: "nntb_4" });
  const nntb_5 = intl.formatMessage({ id: "nntb_5" });
  const nntb_6 = intl.formatMessage({ id: "nntb_6" });
  const how_descrease_temperature = intl.formatMessage({ id: "how_descrease_temperature" });

  const nntb_7 = intl.formatMessage({ id: "nntb_7" });
  const nntb_8 = intl.formatMessage({ id: "nntb_8" });
  const nntb_9 = intl.formatMessage({ id: "nntb_9" });
  const hdt_14_1 = intl.formatMessage({ id: "hdt_14_1" });

  function getFirstMainContent() {
    return (<>
    <p>{nntb_1}</p>
    <p>{nntb_2}</p>
    <p>{nntb_3}<Link href={getMainAddress('articles/about_turbo')}>{about_turbo_header.toLowerCase()}</Link>.</p>
    </>);
  }

  function getSecondMainContent() {
    return (<>
    <p>{nntb_4}</p>
    <p>{nntb_5}</p>
    <p>{nntb_6}<Link href={getMainAddress('articles/how_descrease_temperature')}>{how_descrease_temperature.toLowerCase()}</Link>.</p>
    <p>{nntb_7}</p>
    <p>{nntb_8}</p>
    <p>{nntb_9}<Link href={getMainAddress('')}>{hdt_14_1}</Link>.</p>
    </>);
  }

  return (
    <>
      <Screen name={"noizy_ntb"} 
                    h1={noizy_ntb} 
                    reverse={true}
                    columns={2} 
                    main_content={getFirstMainContent()}
                    image={"/images/noizy_notebook.jpg"}
                    alt={alt_noizy_ntb}
                    image_style={{maxHeight: "268px", height: "268px", maxWidth: "100%", width: "100%"}}
                    image_priority={100}
                    />

        <Screen name={"cooling_system"} 
                    reverse={false}
                    columns={2} 
                    main_content={getSecondMainContent()}
                    image={"/images/cooling_system.jpg"}
                    alt={alt_noizy_ntb_2}
                    image_style={{maxHeight: "378px", height: "298px", maxWidth: "100%", width: "100%", minWidth: "none"}}
                    image_priority={100}
        />
        <HowItWorksScreen />
    </>
  );
}
