import Script from 'next/script'

export default function YandexAD() {
    return <>
                <Script>
                    {`window.yaContextCb=window.yaContextCb||[]`}
                </Script>
                <Script 
                    src="https://yandex.ru/ads/system/context.js" 
                />
            </>
}