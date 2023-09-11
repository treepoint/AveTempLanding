'use client'
import ModalWindow from "../../elements/ModalWindow/ModalWindow"
import styles from './DownloadWindow.module.scss'
import Link from "next/link"
import Script from "next/script"
import { useIntl } from "react-intl"
import { useState, useEffect } from "react"
import "../../_globals.js"

import { useSelector } from 'react-redux'
import { selectIsOpened } from '../../store/features/modalWindowSlice'

export default function DownloadWindow() {
    const [timer, setTimer] = useState(10);

    const intl = useIntl();
    const download = intl.formatMessage({ id: "download_button" });

    const link_will_be_available = intl.formatMessage({ id: "link_will_be_available" });
    const seconds_text = intl.formatMessage({ id: "seconds..." });
    const download_disclaimer = intl.formatMessage({ id: "download_disclaimer" });
    const your_link = intl.formatMessage({ id: "your_link" });

    const isOpened = useSelector(selectIsOpened);

    useEffect(() => {
        if (isOpened && timer !== 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
        
            return () => clearInterval(interval);
        }
      }, [isOpened, timer]);

    return (
        <ModalWindow title={download + ' AveTemp'}>
            {
                timer ? 
                <p>{link_will_be_available}{timer}{seconds_text}</p> 
                : 
                <div>
                    <p>{download_disclaimer}</p>
                    {your_link} <Link href={download_link}>{download}</Link>

                    <div className={styles.ad}id="yandex_rtb_R-A-2952455-3"></div>
                    <Script id="yandex_rtb_R-A-2952455-3" strategy="afterInteractive">
                                {`window.yaContextCb.push(()=>{
                                        Ya.Context.AdvManager.render({
                                            "blockId": "R-A-2952455-3",
                                            "renderTo": "yandex_rtb_R-A-2952455-3"
                                        })
                                    });
                                `}
                    </Script>
                </div>
            }
        </ModalWindow>
      );
}