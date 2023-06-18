'use client';
import { useIntl } from "react-intl";
import "../../_globals.js";

function Updating_message(props) {

    const intl = useIntl();
    const message = intl.formatMessage({ id: "update_message_text" });
    const download = intl.formatMessage({ id: "download_button" });

    function isVisible() {
        if (props.visible) {
            return props.styles.visible;
        }
    }

    return (
    <div className={[props.styles.update_message, isVisible()].join(' ')}>
        { message }
        <a className={props.styles.update_message_link} 
           href={download_link} 
           rel="noopener">
           { download }
        </a>
    </div>
    );
}

export default Updating_message;