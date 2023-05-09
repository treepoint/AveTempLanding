'use client';
import { useIntl } from "react-intl";

function Release(props) {

    const intl = useIntl();

    function getDescription() {
        let description;

        if (typeof(props.description) !== 'undefined') {
            description = intl.formatMessage({ id: props.description });
            return  <p>{description}</p>;
        }
    }

    function getPS() {
        let ps;

        if (typeof(props.ps) !== 'undefined') {
            ps = intl.formatMessage({ id: props.ps });
            return  <p>{ps}</p>;
        }
    }

    let changes;

    changes = props.changes.map((locale_text) => (
        intl.formatMessage({ id: locale_text })
    ))

    return (
      <div className={props.styles.release}>
        <h3>{props.title}</h3>
        {getDescription()}
        <ul>
            {changes.map((text, index) => (
                <li key = {index} >{text}</li>
            ))}
        </ul>
        {getPS()}
      </div>
    );
}

export default Release;