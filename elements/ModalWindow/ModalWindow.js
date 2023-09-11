import styles from './ModalWindow.module.scss'
import { useSelector } from 'react-redux'
import Blur from '../../elements/Blur/Blur'
import { useDispatch } from 'react-redux'
import { changeIsOpened } from "../../store/features/modalWindowSlice"

import { selectIsOpened } from '../../store/features/modalWindowSlice'

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
                <div className={styles.header}>{props.title}</div>
                {props.children}
            </div>
        </>
      );
}