'use client';
import { openInNewTab } from "../../support/support.js";

import styles from './SocialIcons.module.scss'

export default function SocialIcons() {
    return (<div className={styles.social_icons}>
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
    );
}