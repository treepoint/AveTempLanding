import styles from './Menu.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Blur from '../../elements/Blur/Blur'
import { getMainAddress } from '../../support/support'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectMenu } from '../../store/features/menuSlice'

export default function Menu(props) {
    const [isActive, setIsActive] = useState(false);

    let menu = useSelector(selectMenu);

    function getItems() {
        let menu_array = [];

        for (const [key, value] of Object.entries(menu)) {
            menu_array.push({name: value.name[props.locale], link: value.link})
        }

        return menu_array.map((item, index) => {
            return <Link 
                        key={index} 
                        className={styles.item} 
                        href={getMainAddress(item.link)} 
                        onClick={showMenu}>
                    {item.name}
                    </Link>
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