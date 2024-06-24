import Script from 'next/script'

function AD() {
    return (
        <>
        <Script id="yandex_rtb_R-A-2952455-5" strategy="afterInteractive">
                    {`window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                                "blockId": "R-A-2952455-5",
                                "type": "floorAd",
                                "platform": "touch"
                            })
                        });
                    `}
        </Script>
        <Script id="yandex_rtb_R-A-2952455-6" strategy="afterInteractive">
                    {`window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                                "blockId": "R-A-2952455-6",
                                "type": "floorAd",
                                "platform": "desktop"
                            })
                        });
                    `}
        </Script>
        </>
      );
}

export default AD;