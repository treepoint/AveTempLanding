'use client'

import Image from "next/image"
import { useIntl } from "react-intl"
import styles from './Promo.module.scss'

export default function Promo() {

    const intl = useIntl();
    const promo_install = intl.formatMessage({ id: "promo_install" });
    const promo_reduce = intl.formatMessage({ id: "promo_reduce" });
    const promo_turbo = intl.formatMessage({ id: "promo_turbo" });

    function getPromo() {
      let promos = [
        {src: '/images/promo_setup.png', styles: styles.promo_label_one, text: promo_install},
        {src: '/images/promo_temps.png', styles: styles.promo_label_two, text: promo_reduce},
        {src: '/images/promo_performance.png', styles: styles.promo_label_three, text: promo_turbo},
      ]

      return promos.map((promo, index) => {
        return <div className={styles.item} key={index}>
                  <Image 
                    src={promo.src}
                    width={96} 
                    height={96} 
                    alt={promo.text}
                  />
                  <p className={promo.styles}>{promo.text}</p>
              </div>
      })
    }

    return (
        <div className={styles.wrapper}>
          {getPromo()}
        </div>
    );
}