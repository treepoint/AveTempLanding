import styles from './Menu.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Blur from '../../elements/Blur/Blur'
import { getMainAddress } from '../../support/support'
import { useState } from 'react'

import { useIntl } from "react-intl"

export default function Menu(props) {
    const [isActive, setIsActive] = useState(false);

    const intl = useIntl();

    const features_headline = intl.formatMessage({ id: "features_headline" });
    const HTU_headline = intl.formatMessage({ id: "HTU_headline" });
    const feedback_headline = intl.formatMessage({ id: "feedback_headline" });
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const changelog_headline = intl.formatMessage({ id: "changelog_headline" });
    const articles_headline = intl.formatMessage({ id: "articles_headline" });
    const road_map = intl.formatMessage({ id: "road_map" });

    let items = [
        {name: HTU_headline, url: '#how_to_use'},
        {name: road_map, url: '#road_map'},
        {name: feedback_headline, url: '#feedback'},
        {name: support_headline, url: '#support'},
        {name: features_headline, url: '#features'},
        {name: changelog_headline, url: 'changelog'},
        {name: articles_headline, url: 'articles'}
    ]

    function getItems() {
        return items.map(item => {
            return <Link className={styles.item} href={getMainAddress(item.url)} onClick={showMenu}>{item.name}</Link>
        })
    }

    function showMenu() {
        setIsActive(!isActive);
    }

    return (
        <>
            {props.isMobile? 
            <>
                <Blur isActive={isActive} onClick={showMenu}/> 
                <Image 
                    src={'/images/menu.png'} 
                    className={styles.button} 
                    height={48} 
                    width={48} 
                    onClick={showMenu}
                    alt={host}
                />
            </>
            : ''}
            
            {isActive | !props.isMobile ? 
            <div className={props.isMobile? styles.mobile_wrapper : styles.wrapper}>
                {getItems()}
            </div>
            : ''}
        </>
    );
}