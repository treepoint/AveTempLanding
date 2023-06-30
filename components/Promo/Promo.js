'use client'

import Image from "next/image"
import { useIntl } from "react-intl"
import styles from './Promo.module.scss'

function Promo() {

    const intl = useIntl();
    const promo_install = intl.formatMessage({ id: "promo_install" });
    const promo_reduce = intl.formatMessage({ id: "promo_reduce" });
    const promo_turbo = intl.formatMessage({ id: "promo_turbo" });

    return (
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Image src="/images/promo_setup.png" width={96} height={96} alt=""></Image>
            <p className={styles.promo_label_one}>{promo_install}</p>
          </div>
          
          <div className={styles.item}>
            <Image src="/images/promo_temps.png" width={96} height={96} alt=""></Image>
            <p className={styles.promo_label_two}>{promo_reduce}</p>
          </div>

          <div className={styles.item}>
            <Image src="/images/promo_performance.png" width={96} height={96} alt=""></Image>
            <p className={styles.promo_label_three}>{promo_turbo}</p>
          </div>
        </div>
    );
}

export default Promo;