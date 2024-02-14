import Blur from '../../elements/Blur/Blur'
import Image from 'next/image'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeIsOpened } from "../../store/features/modalWindowSlice"
import { selectIsOpened } from '../../store/features/modalWindowSlice'

import styles from './ModalWindow.module.scss'

export default function ModalWindows(props) {
    const isOpened = useSelector(selectIsOpened);

    const dispatch = useDispatch();

    function closeWindow() {
        dispatch(changeIsOpened(false));
    }

    return (
        <>
            <Blur isActive={isOpened} onClick={closeWindow} zIndex={99}/> 
            <div className={isOpened ? styles.wrapper : styles.hidden}>
                <div className={styles.header}>
                    <div className={styles.header}>{props.title}</div>
                    <div className={styles.close} onClick={closeWindow}>
                        <Image alt={'Close donwload window'} 
                                src={'/images/close_icon.png'} 
                                width={20}
                                height={20}
                                priority={60}>
                        </Image>
                    </div>
                </div>
                {props.children}
            </div>
        </>
      );
}