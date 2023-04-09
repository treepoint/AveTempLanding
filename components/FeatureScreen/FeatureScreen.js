'use client';
import { useIntl } from "react-intl";
import Screen from "../Screen/Screen.js";
import Support from "../Support/Support.js";

function AboutScreen(props) {

    const intl = useIntl();

    const feature_continuous = intl.formatMessage({ id: "feature_continuous" });
    const feature_collecting_states = intl.formatMessage({ id: "feature_collecting_states" });
    const feature_collecting_times = intl.formatMessage({ id: "feature_collecting_times" });
    const feature_automatic_adjust = intl.formatMessage({ id: "feature_automatic_adjust" });
    const feature_autostart = intl.formatMessage({ id: "feature_autostart" });
    const feature_autocolor = intl.formatMessage({ id: "feature_autocolor" });
    const feature_low_cpu = intl.formatMessage({ id: "feature_low_cpu" });

    function getContent() {
        return (
            <ul>
                <li>{feature_continuous}</li>
                <li>{feature_collecting_states}</li>
                <li>{feature_collecting_times}</li>
                <li>{feature_automatic_adjust}</li>
                <li>{feature_autostart}</li>
                <li>{feature_autocolor}</li>
                <li>{feature_low_cpu}</li>
          </ul>
        );
    }

    return ( <Screen name={"features"} 
                     h2={'features_headline'} 
                     styles={props.styles} 
                     columns={2} 
                     image={"settings_window_screenshot_url"}
                     alt={"settings_window_screenshot_alt"}
                     content={getContent()}
                     below_additinonal_block={<Support styles={props.styles}/>}/>
    );
}

export default AboutScreen;