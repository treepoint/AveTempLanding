import styles from './Alert.module.scss'

function Alert(props) {

    function getAlertType() {
        if (props.isSuccess) {
            return [styles.alert, styles.success].join(' ');
        }

        return [styles.alert, styles.error].join(' ');
    }

    return (
            <div className={styles.wrapper}>
                <div className={getAlertType()} >
                    {props.text}
                </div>
            </div>
      );
}

export default Alert;