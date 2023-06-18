'use client';
import { useIntl } from "react-intl";
import Screen from "../../elements/Screen/Screen.js";
import Promo from "../Promo/Promo.js";

function WhyScreen(props) {

    const intl = useIntl();

    const why_text_1 = intl.formatMessage({ id: "why_text_1" });
    const why_text_2 = intl.formatMessage({ id: "why_text_2" });
    const why_text_3 = intl.formatMessage({ id: "why_text_3" });
    const why_text_4 = intl.formatMessage({ id: "why_text_4" });

    function getContent() {
        return (
            <div>
                <p>
                    {why_text_1} 
                </p>
                <p>
                    {why_text_2}
                </p>
                <p>
                    {why_text_3}
                </p>
                <p>
                    {why_text_4}
                </p>
            </div>
        );
    }

    return (<Screen name={"why"} 
                    h2={props.h2 ? props.h2 : "why_headline"} 
                    h3={props.h3} 
                    styles={props.styles} 
                    reverse={true}
                    columns={2} 
                    main_content={getContent()}
                    second_content={<Promo styles={props.styles}/>}
                    />
    );
}

export default WhyScreen;