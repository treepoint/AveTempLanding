import styles from './Input.module.scss'

function Input(props) {
    function getInput() {
        if (props.textarea) {
            return <textarea 
                    className={styles.textarea} 
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    required
                    />
        }

        return <input 
                className={styles.input} 
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                required 
               />
    }

    return (
            <div className={styles.wrapper}>
                <div className={styles.label}>
                    {props.label}
                </div>
                {getInput()}
            </div>
      );
}

export default Input;