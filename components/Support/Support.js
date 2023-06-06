'use client';
import { useIntl } from "react-intl";
import Image from "next/image";

function Support(props) {

    const intl = useIntl();
    const support_headline = intl.formatMessage({ id: "support_headline" });
    const support_text = intl.formatMessage({ id: "support_text" });

    return (
        <div className={props.styles.support}>
            <h3 id="support" className={props.styles.centered_elem}>
                {support_headline} 
                <Image alt="support AveTemp icon" src="/images/heart_icon.png" width='32.5px' height='22px'></Image>
                AveTemp
            </h3>
            <p className={props.styles.centered_elem}>{support_text}</p>

            <div className={[props.styles.icon_list, props.styles.centered].join(' ')}>
                <a href="https://boosty.to/paul_khoziashev" target="_blank"rel="noopener, noreferrer">
                    <Image alt="support AveTemp icon" src="/images/boosty_128.png" width='56' height='56'></Image>
                </a>
                <a href="https://www.patreon.com/paul_khoziashev" target="_blank" rel="noopener, noreferrer">
                    <Image alt="support AveTemp icon" src="/images/patreon_128.png" width='56' height='56'></Image>
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