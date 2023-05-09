'use client';
import { useIntl } from "react-intl";
import Image from "next/image.js";

function Screen(props) {

    const intl = useIntl();

    function getHeadline() {
        if (typeof(props.h1) !== 'undefined') {
            const h1 = intl.formatMessage({ id: props.h1 });

            return <h1 id={props.name}>{h1}</h1>
        }

        if (typeof(props.h2) !== 'undefined') {
            const h2 = intl.formatMessage({ id: props.h2 });

            return <h2 id={props.name}>{h2}</h2>
        }
    }

    function getColumnsStyles() {
        let classes = [props.styles.columns];

        if (props.columns == 2) {
            classes.push(props.styles.two);
        }

        if (props.reverse) {
            classes.push(props.styles.reverse);
        }

        return classes.join(' ');
    }

    function getImageUrl() {
        const image_url = intl.formatMessage({ id: props.image });

        return image_url;
    }

    function getSecondColumnContent() {
        if (props.image) {
        return <div className={props.styles.screenshot} style={props.image_style}>
                    <Image alt={props.alt} 
                        src={getImageUrl()} 
                        layout="fill" 
                        objectFit="contain"
                        priority={props.image_priority}
                        objectPosition={props.image_postition}>
                    </Image>
               </div>
        }

        if (props.second_content) {
            return props.second_content;
        }
    }

    return (
        <div className={props.styles.screen}>
            {getHeadline()}
            <div className={getColumnsStyles()}>
                <div className={props.styles.screenshot_column}>
                    {getSecondColumnContent()}
                </div>
                <div className={props.styles.half}>
                    {props.above_additinonal_block}
                    {props.main_content}
                    {props.below_additinonal_block}
                </div>
            </div>
        </div>
    );
}

export default Screen;