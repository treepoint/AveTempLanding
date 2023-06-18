'use client';
import { useIntl } from "react-intl"
import styles from './DownloadButton.module.scss'
import Button from '../Button/Button'
import "../../_globals.js";

export default function DownloadButton(props) {
    const intl = useIntl();
    const download_button = intl.formatMessage({ id: "download_button" });


    return (
        <div className={props.isCentered ? styles.centered : ''}>
            <form method="get" action={download_link}>
                <Button 
                    name={download_button} 
                    isPrimary={props.isPrimary}
                />
            </form>
        </div>
    ); 
}