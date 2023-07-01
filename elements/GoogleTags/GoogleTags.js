import Script from 'next/script'

export default function GoogleTags() {
    return <>
                <Script 
                    src="https://www.googletagmanager.com/gtag/js?id=G-1D8PFXBZ8V" 
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                
                        gtag('config', 'G-1D8PFXBZ8V');
                    `}
                </Script>
            </>
}