import styles from './Blur.module.scss'
import { useState, useEffect } from 'react'

export default function Blur(props) {
    const [isActive, setIsActive] = useState(false);

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