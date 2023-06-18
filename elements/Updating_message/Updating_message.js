'use client';
import { useIntl } from "react-intl";
import styles from './Updating_message.module.scss'
import "../../_globals.js";

function Updating_message(props) {

    const intl = useIntl();
    const message = intl.formatMessage({ id: "update_message_text" });
    const download = intl.formatMessage({ id: "download_button" });

    function isVisible() {
        if (props.visible) {
            return styles.visible;
        }
    }

    return (
    <div className={[styles.update_message, isVisible()].join(' ')}>
        { message }
        <a className={styles.update_message_link} 
           href={download_link} 
           rel="noopener">
           { download }
        </a>
    </div>
    );
}

export default Updating_message;