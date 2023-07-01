import Screen from "../../../elements/Screen/Screen.js"
import Promo from "../../../components/Promo/Promo.js"
import Link from "next/link.js"
import DownloadButton from "../../../elements/DownloadButton/DownloadButton.js"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import { getMainAddress } from "../../../support/support.js"

import styles from "../../../styles/Main.module.scss"

import "../../../_globals.js"

HowToDescreaseTemperature.title = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.title_htd" });
}

HowToDescreaseTemperature.description = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.description_htd" });
}

export default function HowToDescreaseTemperature() {
  const intl = useIntl();
  const { locale } = useRouter();

  const how_descrease_temperature = intl.formatMessage({ id: "how_descrease_temperature" });
  const dirty_cooler = intl.formatMessage({ id: "dirty_cooler" });
  const cpu_params = intl.formatMessage({ id: "cpu_params" });

  const turbo = intl.formatMessage({ id: "turbo" });

  const hdt_1 = intl.formatMessage({ id: "hdt_1" });
  const hdt_2 = intl.formatMessage({ id: "hdt_2" });
  const hdt_3 = intl.formatMessage({ id: "hdt_3" });
  const hdt_4 = intl.formatMessage({ id: "hdt_4" });
  const hdt_5 = intl.formatMessage({ id: "hdt_5" });

  const hdt_6 = intl.formatMessage({ id: "hdt_6" });
  const hdt_7 = intl.formatMessage({ id: "hdt_7" });
  const hdt_8 = intl.formatMessage({ id: "hdt_8" });
  const hdt_9 = intl.formatMessage({ id: "hdt_9" });
  const hdt_10 = intl.formatMessage({ id: "hdt_10" });

  const hdt_11 = intl.formatMessage({ id: "hdt_11" });
  const hdt_12 = intl.formatMessage({ id: "hdt_12" });
  const hdt_13 = intl.formatMessage({ id: "hdt_13" });
  const hdt_14 = intl.formatMessage({ id: "hdt_14" });
  const hdt_14_1 = intl.formatMessage({ id: "hdt_14_1" });
  const hdt_15 = intl.formatMessage({ id: "hdt_15" });
  const hdt_16 = intl.formatMessage({ id: "hdt_16" });

  function getFirstMainContent() {
    return (<>
        <p>{hdt_1}<Link href={getMainAddress('articles/about_turbo')}>{turbo}</Link>.</p>
        <p>{hdt_2}</p>
        <p>{hdt_3}</p>
        <p>{hdt_4}</p>
        <p>{hdt_5}</p>
    </>);
  }

  function getSecondMainContent() {
    return (<>
        <p>{hdt_6}</p>
        <p>{hdt_7}</p>
        <p>{hdt_8}</p>
        <p>{hdt_9}</p>
        <p>{hdt_10}</p>
    </>);
  }

  function getThirdMainContent() {
    return (<>
        <p>{hdt_11}</p>
        <p>{hdt_12}</p>
        <p>{hdt_13}</p>
        <p>{hdt_14}<Link href={getMainAddress('')}>{hdt_14_1}</Link>.</p>
        <p>{hdt_15}</p>
        <p>{hdt_16}</p>
    </>);
  }

  return (
    <>
      <Screen name={"how_descrease_temperature"} 
                    h1={how_descrease_temperature} 
                    styles={styles} 
                    reverse={true}
                    columns={2} 
                    main_content={getFirstMainContent()}
                    image={"/images/cpu_params.png"}
                    alt={cpu_params}
                    image_style={{maxHeight: "298px", height: "298px", maxWidth: "100%", width: "100%"}}
                    image_priority={100}
                    />

        <Screen name={"dirty_system"} 
                    styles={styles} 
                    reverse={false}
                    columns={2} 
                    main_content={getSecondMainContent()}
                    image={"/images/dirty_cooler.webp"}
                    alt={dirty_cooler}
                    image_style={{maxHeight: "378px", height: "298px", maxWidth: "100%", width: "100%", minWidth: "none"}}
                    image_priority={100}
        />
        <Screen name={"programm_option"} 
                    styles={styles} 
                    reverse={true}
                    columns={2} 
                    main_content={getThirdMainContent()}
                    second_content={<Promo styles={styles}/>}
        />
        {<DownloadButton isCentered/>}
    </>
  );
}
