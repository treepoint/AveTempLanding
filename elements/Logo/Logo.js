import Link from "next/link"
import Image from "next/image"
import { getMainAddress } from "../../support/support"

import styles from './Logo.module.scss'

export default function Logo() {
    return <div className={styles.logo_block}>
                <Link href={getMainAddress('')}>
                    <Image
                        src="/images/logo.png"
                        width={36}
                        height={36}
                        alt="AveTemp Logo"
                        className={styles.logo}
                    />
                </Link>
            </div>  
}