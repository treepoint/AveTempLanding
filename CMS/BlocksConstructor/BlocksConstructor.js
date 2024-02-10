import { useRouter } from "next/router"

import HowItWorksScreen from "../../StaticBlocks/HowItWorksScreen/HowItWorksScreen"
import WhyScreen from "../../StaticBlocks/WhyScreen/WhyScreen"
import FeatureScreen from "../../StaticBlocks/FeatureScreen/FeatureScreen"
import HowToUseScreen from "../../StaticBlocks/HowToUseScreen/HowToUseScreen"
import FeedbackScreen from "../../StaticBlocks/FeedbackScreen/FeedbackScreen"
import RoadMapScreen from "../../StaticBlocks/RoadMapScreen/RoadMapScreen"
import Support from "../../StaticBlocks/Support/Support"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Promo from "../../StaticBlocks/Promo/Promo"
import Changelog from "../../StaticBlocks/Changelog/Changelog"

function getH2(block, locale) {
  if (block.title) {
    return block.title[locale]
  }
}

function getBlocks(blocks, locale, locales) {
    let result = [];

    if (blocks) {
      blocks.forEach(block => {
        if (block.name == "FeatureScreen") {
          result.push(<FeatureScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "FeedbackScreen") {
          result.push(<FeedbackScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "HowItWorksScreen") {
          result.push(<HowItWorksScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "HowToUseScreen") {
          result.push(<HowToUseScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "Support") {
          result.push(<Support h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "WhyScreen") {
          result.push(<WhyScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "RoadMapScreen") {
          result.push(<RoadMapScreen h2={getH2(block, locale)}/>)
        }
    
        if (block.name == "DownloadButton") {
          result.push(<DownloadButton isCentered/>)
        }
    
        if (block.name == "Promo") {
          result.push(<Promo/>)
        }
  
        if (block.name == "Changelog") {
          result.push(<Changelog locales = {[...locales]}/>)
        }
      })
    }
  
    return result;
  }

export default function BlocksConstructor(props) {
    const { locale, locales } = useRouter();

    return (
        <>
            {getBlocks(props.blocks, locale, locales)}
        </>
    )
}