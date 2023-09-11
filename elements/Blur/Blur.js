import styles from './Blur.module.scss'
import { useState, useEffect } from 'react'
const bodyScrollLock = require('body-scroll-lock')

const options = {
    reserveScrollBarGap: true,
};

const disableBodyScroll = bodyScrollLock.disableBodyScroll
const enableBodyScroll = bodyScrollLock.enableBodyScroll

export default function Blur(props) {
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        if (props.isActive) {
            disableBodyScroll(document.body, options);
        }

        return () => enableBodyScroll(document.body);

    }, [props.isActive]);

    useEffect(() => {
        setIsActive(props.isActive);
      }, [props.isActive]);

    function onClick() {
        setIsActive(false);
        props.onClick();
    }

    return (
        <div 
            className={isActive ? styles.blur : styles.hidden} 
            style={props.zIndex ? {zIndex: props.zIndex} : {}}
            onClick={onClick}
        />
    )
}