'use client';
import { useIntl } from "react-intl";

function Promo(props) {

    const intl = useIntl();
    const promo_install = intl.formatMessage({ id: "promo_install" });
    const promo_reduce = intl.formatMessage({ id: "promo_reduce" });
    const promo_turbo = intl.formatMessage({ id: "promo_turbo" });

    return (
        <div className={props.styles.icon_list}>
          <div className={props.styles.icon_item}>
            <img className={props.styles.promo_image} src="../images/promo_setup.png"/>
            <p className={props.styles.promo_label}>{promo_install}</p>
          </div>
          
          <div className={props.styles.icon_item}>
            <img className={props.styles.promo_image} src="../images/promo_temps.png"/>
            <p className={props.styles.promo_label}>{promo_reduce}</p>
          </div>

          <div className={props.styles.icon_item}>
            <img className={props.styles.promo_image} src="../images/promo_performance.png"/>
            <p className={props.styles.promo_label}>{promo_turbo}</p>
          </div>
        </div>
    );
}

export default Promo;