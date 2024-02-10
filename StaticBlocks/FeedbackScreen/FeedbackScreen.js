'use client';
import { useIntl } from "react-intl"
import Screen from "../../elements/Screen/Screen.js"
import FeedbackForm from "../FeedbackForm/FeedbackForm.js"
import { openInNewTab } from "../../support/support.js";

import styles from './FeedbackScreen.module.scss'

export default function FeedbackScreen(props) {

    const intl = useIntl();

    const feedback_text_1 = intl.formatMessage({ id: "feedback_text_1" });
    const feedback_text_2 = intl.formatMessage({ id: "feedback_text_2" });
    const feedback_text_3 = intl.formatMessage({ id: "feedback_text_3" });
    const feedback_text_4 = intl.formatMessage({ id: "feedback_text_4" });

    function getContent() {
        return (
            <div>
                <p>
                    {feedback_text_1} 
                </p>
                <p>
                    {feedback_text_2}{' '}<a href="https://github.com/treepoint/AveTemp/issues">Github</a>{'. '}{feedback_text_3}
                </p>
                <p>
                    {feedback_text_4}
                </p>
                <div className={styles.social_icons}>
                    <div 
                        className={styles.telegram} 
                        onClick={() => openInNewTab("https://t.me/PaulKhoziashev")}>
                    </div>
                    <div 
                        className={styles.mail} 
                        onClick={() => openInNewTab("mailto: 79194544428@ya.ru")}>
                    </div>
                    <div 
                        className={styles.github} 
                        onClick={() => openInNewTab("https://github.com/treepoint")}>
                    </div>
                </div>
            </div>
        );
    }

    return (<Screen name={"feedback"} 
                    h2={{ id: "feedback_headline" }} 
                    reverse={true}
                    columns={2} 
                    main_content={getContent()}
                    second_content={<FeedbackForm/>}
                    />
    );
}