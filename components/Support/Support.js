'use client';
import { useIntl } from "react-intl";

function Support(props) {

    const intl = useIntl();
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const support_text = intl.formatMessage({ id: "support_text" });

    return (
        <div className={props.styles.support}>
            <h2 id="support" className={props.styles.centered_elem}>
                {support_headline} 
                <img alt="support_icon" className={props.styles.icon_22} src="../images/heart_icon.png"/> 
                AveTemp
            </h2>
            <p className={props.styles.centered_elem}>{support_text}</p>

            <div className={[props.styles.icon_list, props.styles.centered].join(' ')}>
                <a href="https://boosty.to/paul_khoziashev" target="_blank"rel="noopener, noreferrer">
                    <img alt="boosty" className={props.styles.icon_56_link} src="../images/boosty_128.png"/>
                </a>
                <a href="https://www.patreon.com/paul_khoziashev" target="_blank" rel="noopener, noreferrer">
                    <img alt="patreon" className={props.styles.icon_56_link} src="../images/patreon_128.png"/>
                </a>
            </div>

            <div className={props.styles.icon_list}>
                <div className={props.styles.icon_item}>
                    <div className={props.styles.currency}>USD</div>
                    4278 3100 2282 7059
                </div>
                <div className={props.styles.icon_item}>
                    <div className={props.styles.currency}>UZS</div>
                    8600 4904 8192 1298
                </div>
                <div className={props.styles.icon_item}>
                    <div className={props.styles.currency}>RUB</div>
                    2202 2023 3862 1422
                </div>
            </div>
        </div>
    );
}

export default Support;