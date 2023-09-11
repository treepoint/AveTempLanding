'use client'
import { useIntl } from "react-intl"
import { useDispatch } from 'react-redux'
import { changeIsOpened } from "../../store/features/modalWindowSlice"

import styles from './DownloadButton.module.scss'
import Button from '../Button/Button'
import "../../_globals.js"

export default function DownloadButton(props) {
    const intl = useIntl();
    const download_button = intl.formatMessage({ id: "download_button" });

    const dispatch = useDispatch();

    function openWindow() {
        dispatch(changeIsOpened(true));
    }

    return (
        <div className={props.isCentered ? styles.centered : ''}>
            <Button 
                name={download_button} 
                isPrimary={props.isPrimary}
                onClick={openWindow}
            />
        </div>
    ); 
}