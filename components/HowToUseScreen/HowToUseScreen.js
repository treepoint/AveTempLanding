'use client';
import { useIntl } from "react-intl";
import Screen from "../../elements/Screen/Screen.js";

function HowItWorksScreen(props) {

    const intl = useIntl();

    const HTU_text_1 = intl.formatMessage({ id: "HTU_text_1" });
    const HTU_text_2 = intl.formatMessage({ id: "HTU_text_2" });
    const HTU_text_3 = intl.formatMessage({ id: "HTU_text_3" });
    const HTU_text_4 = intl.formatMessage({ id: "HTU_text_4" });
    const HTU_text_5 = intl.formatMessage({ id: "HTU_text_5" });
    const HTU_text_6 = intl.formatMessage({ id: "HTU_text_6" });
    const HTU_text_7 = intl.formatMessage({ id: "HTU_text_7" });
    const HTU_text_8 = intl.formatMessage({ id: "HTU_text_8" });
    const HTU_text_9 = intl.formatMessage({ id: "HTU_text_9" });

    const settings_window_screenshot_alt = intl.formatMessage({ id: "settings_window_screenshot_alt" });
    
    function getContent() {
        return (
            <div>
                <p>
                    {HTU_text_1}<a href={download_link} target="_blank" rel="noopener, noreferrer">{HTU_text_2}</a>{HTU_text_3}
                </p>
                <p>{HTU_text_4}</p>
                <p>{HTU_text_5}</p>
                <p>{HTU_text_6}</p>
                <p>{HTU_text_7}</p>
                <p>{HTU_text_8}</p>
                <p>{HTU_text_9}</p>
            </div>
        );
    }

    return (<Screen name={"how_to_use"} 
                    h2={"HTU_headline"} 
                    columns={2} 
                    reverse={false} 
                    image={"settings_window_screenshot_url"}
                    alt={settings_window_screenshot_alt}
                    image_style={{maxHeight: "759px", height: "759px", maxWidth: "100%", width: "100%"}}
                    image_priority={100}
                    main_content={getContent()}
            />
    );
}

export default HowItWorksScreen;