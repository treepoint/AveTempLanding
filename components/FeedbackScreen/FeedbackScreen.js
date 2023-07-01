'use client';
import { useIntl } from "react-intl";
import Screen from "../../elements/Screen/Screen.js";
import FeedbackForm from "../FeedbackForm/FeedbackForm.js";

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
            </div>
        );
    }

    return (<Screen name={"feedback"} 
                    h2={"feedback_headline"} 
                    reverse={true}
                    columns={2} 
                    main_content={getContent()}
                    second_content={<FeedbackForm/>}
                    />
    );
}