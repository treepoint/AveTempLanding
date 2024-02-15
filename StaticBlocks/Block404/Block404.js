import styles from './Block404.module.scss'
import Button from '../../elements/Button/Button'
import { useIntl } from "react-intl"
import { useRouter } from 'next/router'

export default function Block404() {
  const router = useRouter();
  const intl = useIntl();

  const home_button = intl.formatMessage({ id: "home_button" });
  const not_found_text = intl.formatMessage({ id: "not_found_text" });

  function returnToMain() {
    router.push('/');
  }

  return (
    <>
        <div className={styles.wrapper}>
          <div className={styles.image}/>
          <div className={styles.hover}>{'4 4'}</div>
          <p>{not_found_text}</p>
          <Button isPrimary name={home_button} onClick={returnToMain}/>
        </div>
    </>
  )
}