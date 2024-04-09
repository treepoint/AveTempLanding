import Script from 'next/script'
import Support from '../../components/Support/Support'
import React from "react"
import { AdBlockDetectedWrapper } from "adblock-detect-react"


function SupportOrAD() {
    return (
        <>
        <AdBlockDetectedWrapper>
            <Support/>
        </AdBlockDetectedWrapper>
        <div id="yandex_rtb_R-A-2952455-4"></div>
        <Script id="yandex_rtb_R-A-2952455-4" strategy="afterInteractive">
                    {`window.yaContextCb.push(()=>{
                            Ya.Context.AdvManager.render({
                                "blockId": "R-A-2952455-4",
                                "renderTo": "yandex_rtb_R-A-2952455-4"
                            })
                        });
                    `}
        </Script>
        </>
      );
}

export default SupportOrAD;