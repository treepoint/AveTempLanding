'use client';
import { useIntl } from "react-intl";
import styles from './Updating_message.module.scss'
import { useState, useEffect } from "react"
import "../../_globals.js";

function Updating_message(props) {

    const intl = useIntl();
    const message = intl.formatMessage({ id: "update_message_text" });
    const download = intl.formatMessage({ id: "download_button" });

    const [timer, setTimer] = useState(5);

    function isVisible() {
        if (props.isVisible && timer <= 0) {
            return styles.visible;
        }
    }

    useEffect(() => {
        if (timer !== 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
        
            return () => clearInterval(interval);
        }
      }, [timer]);

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