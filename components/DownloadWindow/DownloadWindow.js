'use client'
import ModalWindow from "../../elements/ModalWindow/ModalWindow"
import styles from './DownloadWindow.module.scss'
import Link from "next/link"
import Script from "next/script"
import Image from "next/image.js"

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
    const avetemp_download_description = intl.formatMessage({ id: "avetemp_download_description" });
    const avewall_download_description = intl.formatMessage({ id: "avewall_download_description" });

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
        <ModalWindow title={download}>
            <div className={styles.catalog_wrapper}>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image alt={'AveTemp fullsize logo'} 
                            src={'/images/avetemp_logo.png'} 
                            width={128}
                            height={128}
                            priority={60}>
                        </Image>
                    </div>
                    <p className={styles.p}><b>AveTemp</b></p>
                    <p className={styles.small_p}>{avetemp_download_description}</p>
                    {timer ? '' : <Link href={avetemp_download_link}>{download}</Link>}
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image alt={'AveWall fullsize logo'} 
                            src={'/images/avewall_logo.png'} 
                            width={128}
                            height={128}
                            priority={60}>
                        </Image>
                    </div>
                    <p className={styles.p}><b>AveWall</b></p>
                    <p className={styles.small_p}>{avewall_download_description}</p>
                    {timer ? '' : <Link href={avewall_download_link}>{download}</Link>}
                </div>
            </div>
            <p className={styles.links}>
                { timer ? link_will_be_available + timer + seconds_text : download_disclaimer }
            </p> 

            <div className={styles.ad} id="yandex_rtb_R-A-2952455-3"></div>
            <Script id="yandex_rtb_R-A-2952455-3" strategy="afterInteractive">
                        {`window.yaContextCb.push(()=>{
                                Ya.Context.AdvManager.render({
                                    "blockId": "R-A-2952455-3",
                                    "renderTo": "yandex_rtb_R-A-2952455-3"
                                })
                            });
                        `}
            </Script>
        </ModalWindow>
      );
}