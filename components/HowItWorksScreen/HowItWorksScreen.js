'use client';
import { useIntl } from "react-intl";
import Screen from "../../elements/Screen/Screen.js";

function HowItWorksScreen(props) {

    const intl = useIntl();

    const HIW_text_1 = intl.formatMessage({ id: "HIW_text_1" });
    const HIW_text_2 = intl.formatMessage({ id: "HIW_text_2" });
    const HIW_ol_1 = intl.formatMessage({ id: "HIW_ol_1" });
    const HIW_ol_2 = intl.formatMessage({ id: "HIW_ol_2" });
    const HIW_ol_3 = intl.formatMessage({ id: "HIW_ol_3" });
    const HIW_text_3 = intl.formatMessage({ id: "HIW_text_3" });
    const HIW_text_4 = intl.formatMessage({ id: "HIW_text_4" });
    const HIW_text_5 = intl.formatMessage({ id: "HIW_text_5" });
    const HIW_text_6 = intl.formatMessage({ id: "HIW_text_6" });
    const HIW_text_7 = intl.formatMessage({ id: "HIW_text_7" });
    
    const download_button = intl.formatMessage({ id: "download_button" });
    const main_window_screenshot_alt = intl.formatMessage({ id: "main_window_screenshot_alt" });

    function getDownloadButton() {
      return (
          <a className={[props.styles.btn, props.styles.btn_outline_danger].join(' ')}
              href={download_link} 
              role="button">
              {download_button}
          </a>
      )
   }

    function getContent() {
        return (
            <div>
                <p>
                    {HIW_text_1} <a href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" target="_blank" rel="noopener, noreferrer">LibreHardwareMonitorLib</a>. {HIW_text_2}
                </p>
                <p>
                    <ol>
                        <li>{HIW_ol_1}</li>
                        <li>{HIW_ol_2}</li>
                        <li>{HIW_ol_3}</li>
                    </ol>
                </p>
                <p>{HIW_text_3}</p>
                <p>{HIW_text_4}</p>
                <p>{HIW_text_5}<a href="https://github.com/treepoint/AveTemp" target="_blank" rel="noopener, noreferrer">{HIW_text_6}</a>{HIW_text_7}</p>
            </div>
        );
    }

    return (<Screen name={"how_it_works"} 
                    h1={"h1"} 
                    styles={props.styles} 
                    columns={2} 
                    reverse={true} 
                    image={"main_window_screenshot_url"}
                    alt={main_window_screenshot_alt}
                    image_style={{maxHeight: "424px", height: "424px", maxWidth: "100%", width: "100%"}}
                    image_priority={100}
                    main_content={getContent()}
                    below_additinonal_block={getDownloadButton()}
                    />
    );
}

export default HowItWorksScreen;