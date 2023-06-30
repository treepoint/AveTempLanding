
'use client';

import { useRouter } from 'next/router'
import styles from './LanguageSelector.module.scss'

function LanguageSelector(props) {
    const router = useRouter();
    const asPath = useRouter();

    function onChange(event) {
        router.push("/"+asPath.asPath, undefined, { locale: event.target.value });
    }
    
    function getLocationOptions() {
        return props.locales.sort().map((locale, index) => (
            <option key = {index} value={locale}>
                {locale}
            </option>
        ))
    }

    return (      
            <div className={styles.wrapper}>
                 <select 
                    className={styles.select} 
                    defaultValue={router.locale} 
                    onChange={onChange}
                >
                {getLocationOptions()}
                </select>
            </div>
      );
}

export default LanguageSelector;