
'use client';

import { useRouter } from 'next/router'

function LanguageSelector(props) {
    const router = useRouter();
    const asPath = useRouter();
    
    return (      
            <div className={props.styles.localization_picker}>
                 <select className={props.styles.form_select} defaultValue={router.locale} onChange={(e)=>{
                    router.push("/"+asPath.asPath, undefined, { locale: e.target.value })
                 }}>
                    {props.locales.sort().map((locale, index) => (
                        <option key = {index} value={locale}>
                            {locale}
                        </option>
                    ))}
                </select>
            </div>
      );
}

export default LanguageSelector;