import Support from "../../components/Support/Support";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import main_styles from "../../styles/Main.module.scss";
import styles from "./Articles.module.scss";

import "../../_globals.js";

export default function Articles() {
  const intl = useIntl();
  const { locale } = useRouter();

  const articles_headline = intl.formatMessage({ id: "articles_headline" });
  const about_turbo_header = intl.formatMessage({ id: "about_turbo_header" });
  const how_descrease_temperature = intl.formatMessage({ id: "how_descrease_temperature" });

  function getMainAddress(url) {
    if (url.includes("#")) {
        return "/"+locale+url;
    }

    return "/"+locale+"/"+url;
  }

  return (
    <>
      <h1>{articles_headline}</h1>
      <div className={styles.wrapper}>
        <ul>
          <li><a href={getMainAddress('about_turbo')}>{about_turbo_header}</a>.</li>
          <li><a href={getMainAddress('how_descrease_temperature')}>{how_descrease_temperature}</a>.</li>
        </ul>
      </div>

      <Support styles={main_styles}/>
    </>
  );
}
