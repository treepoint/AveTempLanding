import styles from './ArticlePreview.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { getMainAddress } from '../../support/support'
import { useIntl } from "react-intl"

export default function ArticlePreview(props) {
    const intl = useIntl();

    const read_more = intl.formatMessage({ id: "read_more" });

    function getDescription() {
        if (props.description) {
            return <>
                        <div className={styles.description}>
                            {props.description.map((description, index) => {
                                return <div key={index}>{description}</div>
                            } )}
                        </div>
                        <div className={styles.read_more}>
                            <Link href={getMainAddress(props.url)}>{read_more}</Link>
                        </div>
                    </>
        }
    }

    return (
            <div className={styles.wrapper}>
                <Link href={getMainAddress(props.url)}>
                    <Image 
                        className={styles.image}
                        src={props.image_url}
                        fill
                        alt={props.alt}
                    />
                </Link>
                <div className={styles.title}>
                    <Link href={getMainAddress(props.url)}>{props.name}</Link>
                </div>
                {getDescription()}
            </div>
      );
}