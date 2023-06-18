import styles from './Button.module.scss'

function Button(props) {

    function getButtonType() {

        if (props.isPrimary) {
            return styles.button_primary;
        }
        
        return styles.button_regular;
    }

    function getButton() {

        if (props.isHidden) {
            return <></>;
        }

        let button;

        if (props.onClick) {
            button = <button 
                        id={props.id}
                        className={getButtonType()} 
                        onClick={props.onClick}
                    >
                        {props.name}
                    </button>
        } else {
            button = <button 
                        id={props.id}
                        className={getButtonType()} 
                        type='submit'
                    >
                        {props.name}
                    </button>
        }

        return <div className={styles.wrapper}>{button}</div>
    }

    return (getButton());
}

export default Button;