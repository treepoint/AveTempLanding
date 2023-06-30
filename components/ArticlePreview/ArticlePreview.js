import styles from './ArticlePreview.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useIntl } from "react-intl"

export default function ArticlePreview(props) {
    const { locale } = useRouter();
    const intl = useIntl();

    const read_more = intl.formatMessage({ id: "read_more" });

    function getMainAddress(url) {
        if (url.includes("#")) {
            return "/"+locale+url;
        }

        return "/"+locale+"/"+url;
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
                <div className={styles.description}>
                    {props.description.map(description => {
                        return <p className={styles.p}>{description}</p>
                    } )}
                </div>
                <div className={styles.read_more}>
                    <Link href={getMainAddress(props.url)}>{read_more}</Link>
                </div>
            </div>
      );
}