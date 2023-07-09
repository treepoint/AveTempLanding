import { useIntl } from "react-intl"
import Image from "next/image.js"

import styles from './Screen.module.scss'

export default function Screen(props) {
    const intl = useIntl();

    function getHeadline() {
        if (typeof(props.h3) == 'object' && props.h3 !== null) {
            const h3 = intl.formatMessage(props.h3);

            return <h3 id={props.name}>{h3}</h3>
        } else if (typeof(props.h3) == 'string') {
            return <h3 id={props.name}>{props.h3}</h3>
        }

        if (typeof(props.h2) == 'object' && props.h2 !== null) {
            const h2 = intl.formatMessage(props.h2);

            return <h2 id={props.name}>{h2}</h2>
        } else if (typeof(props.h2) == 'string') {
            return <h2 id={props.name}>{props.h2}</h2>
        }

        if (typeof(props.h1) == 'object' && props.h1 !== null) {
            const h1 = intl.formatMessage(props.h1);

            return <h1 id={props.name}>{h1}</h1>
        } else if (typeof(props.h1) == 'string') {
            return <h1 id={props.name}>{props.h1}</h1>
        }
    }

    function getColumnsStyles() {
        let classes = [styles.columns];

        if (props.columns == 2) {
            classes.push(styles.two);
        }

        if (props.reverse) {
            classes.push(styles.reverse);
        }

        return classes.join(' ');
    }

    function getImageUrl() {
        if (typeof(props.image) == 'string') {
            return props.image;
        }

        const image_url = intl.formatMessage(props.image);

        return image_url;
    }

    function getSecondColumnContent() {
        if (props.image) {
        return <div className={styles.screenshot} style={props.image_style}>
                    <Image alt={props.alt} 
                        src={getImageUrl()} 
                        fill
                        className={props.reverse? [styles.image, styles.right].join(' ') : styles.image}
                        priority={props.image_priority}>
                    </Image>
               </div>
        }

        if (props.second_content) {
            return props.second_content;
        }
    }

    return (
        <div className={styles.wrapper} key={props.index}>
            {getHeadline()}
            <div className={getColumnsStyles()}>
                <div className={styles.screenshot_column}>
                    {getSecondColumnContent()}
                </div>
                <div className={styles.half}>
                    {props.above_additinonal_block}
                    {props.main_content}
                    {props.below_additinonal_block}
                </div>
            </div>
        </div>
    );
}