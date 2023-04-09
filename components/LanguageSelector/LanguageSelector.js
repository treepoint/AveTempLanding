
'use client';

import { useRouter } from 'next/router'

function LanguageSelector(props) {
    const router = useRouter()

    function isSelected(loc) {
        if (loc == router.locale) {
            return true;
        }
    }

    return (      
            <div className={props.styles.localization_picker}>
                 <select className={props.styles.form_select} onChange={(e)=>{
                    router.push("/", undefined, { locale: e.target.value })
                 }}>
                    {props.locales.sort().map((locale) => (
                        <option key = {0} value={locale} selected={isSelected(locale)}>
                            {locale}
                        </option>
                    ))}
                </select>
            </div>
      );
}

export default LanguageSelector;