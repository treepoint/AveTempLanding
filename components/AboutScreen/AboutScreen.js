'use client';
import { useIntl } from "react-intl";
import Screen from "../Screen/Screen.js";
import Promo from "../Promo/Promo.js";

function AboutScreen(props) {

    const intl = useIntl();

    const about_text_1 = intl.formatMessage({ id: "about_text_1" });
    const about_text_2 = intl.formatMessage({ id: "about_text_2" });
    const about_text_3 = intl.formatMessage({ id: "about_text_3" });
    const and = intl.formatMessage({ id: "and" });
    const download_button = intl.formatMessage({ id: "download_button" });

    function getContent() {
        return (
            <div>
                <p>
                {about_text_1} <a href="https://www.python.org/" target="_blank" rel="noopener, noreferrer">Python</a> {and} <a href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" target="_blank" rel="noopener, noreferrer">LibreHardwareMonitorLib</a> {about_text_2}
                </p>
                <p>
                {about_text_3}
                </p>
            </div>
        );
    }

    function getDownloadButton() {
        return (
            <a className={[props.styles.btn, props.styles.btn_outline_danger].join(' ')}
                href={download_link} 
                role="button">
                {download_button}
            </a>
        )
    }

    return (<Screen name={"about"} 
                    h1={'h1'} 
                    styles={props.styles} 
                    columns={2} 
                    reverse={true} 
                    image={"main_window_screenshot_url"}
                    alt={"main_window_screenshot_alt"}
                    image_style={{maxHeight: "472px", height: "472px", maxWidth: "100%", width: "100%"}}
                    content={getContent()}
                    image_priority={100}
                    above_additinonal_block={<Promo styles={props.styles}/>}
                    below_additinonal_block={getDownloadButton()}
                    />
    );
}

export default AboutScreen;