import Script from 'next/script'

function AD() {
    return (
        <>
        <div id="yandex_rtb_R-A-2952455-2"></div>
        <Script id="yandex_rtb_R-A-2952455-2" strategy="afterInteractive">
                    {`window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                                "blockId": "R-A-2952455-2",
                                "renderTo": "yandex_rtb_R-A-2952455-2"
                            })
                        });
                    `}
        </Script>
        </>
      );
}

export default AD;