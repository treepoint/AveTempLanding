'use client'
import { useIntl } from "react-intl"
import { useDispatch } from 'react-redux'
import { changeIsOpened } from "../../store/features/modalWindowSlice.js"

import styles from './DownloadLink.module.scss'
import "../../_globals.js"

export default function DownloadLink(props) {
    const intl = useIntl();
    const download_button = intl.formatMessage({ id: "download_button" });

    const dispatch = useDispatch();

    function openWindow() {
        dispatch(changeIsOpened(true));
    }

    return (
            <a className={styles.download_link} onClick={openWindow}>{props.text ? props.text : download_button}</a>
    ); 
}