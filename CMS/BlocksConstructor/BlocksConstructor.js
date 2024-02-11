import { useRouter } from "next/router"

import WhyScreen from "../../StaticBlocks/WhyScreen/WhyScreen"
import FeatureScreen from "../../StaticBlocks/FeatureScreen/FeatureScreen"
import HowToUseScreen from "../../StaticBlocks/HowToUseScreen/HowToUseScreen"
import FeedbackScreen from "../../StaticBlocks/FeedbackScreen/FeedbackScreen"
import RoadMapScreen from "../../StaticBlocks/RoadMapScreen/RoadMapScreen"
import Support from "../../StaticBlocks/Support/Support"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Promo from "../../StaticBlocks/Promo/Promo"
import Changelog from "../../StaticBlocks/Changelog/Changelog"
import Articles from "../../StaticBlocks/Articles/Articles"
import HelpfulMaterials from "../../StaticBlocks/HelpfulMaterials/HelpfulMaterials"
import Page404 from "../../StaticBlocks/Page404/Page404"

import Screen from "../../elements/Screen/Screen"
import { parseContent} from "../../support/support.js"

function getH2(block, locale) {  
  if (block.title) {
    return block.title[locale];
  }
}

function getBlocks(blocks, locale, locales, articles, cms_blocks) {
    let result = [];

    if (blocks) {
      blocks.forEach(block => {
        let h2 = null;
        h2 = getH2(block, locale);

        if (block.name == "FeatureScreen") {
          result.push(<FeatureScreen h2={h2}/>)
        }
    
        if (block.name == "FeedbackScreen") {
          result.push(<FeedbackScreen h2={h2}/>)
        }
    
        if (block.name == "HowToUseScreen") {
          result.push(<HowToUseScreen h2={h2}/>)
        }
    
        if (block.name == "Support") {
          result.push(<Support h2={h2}/>)
        }
    
        if (block.name == "WhyScreen") {
          result.push(<WhyScreen h2={h2}/>)
        }
    
        if (block.name == "RoadMapScreen") {
          result.push(<RoadMapScreen h2={h2}/>)
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

        if (block.name == "Articles") {
          result.push(<Articles articles = {articles} h2={h2}/>)
        }

        if (block.name == "HelpfulMaterials") {
          result.push(<HelpfulMaterials h2={h2}/>)
        }

        if (block.name == "Page404") {
          result.push(<Page404/>)
        }

        if (block.name == "avetemp_how_it_works") {
          result.push(parseCMSblock(cms_blocks, "avetemp_how_it_works", h2, locale));
        }
      })
    }
  
    return result;
  }

function parseCMSblock(cms_blocks, name, h2, locale) {
  for (let block of cms_blocks) {
    if (block.url == name) {
      for (let screen of block.data[locale].screens) {
        return <>
                  <h2>{h2}</h2>
                  <Screen 
                    name={name} 
                    main_content={parseContent(screen.content)}
                    image={screen.image}
                    image_priority={100}
                    alt={screen.image_alt}
                    reverse={screen.reverse}
                    columns={2} 
                  />
               </>
      }
    }  
  }
}

export default function BlocksConstructor(props) {
    const { locale, locales } = useRouter();

    return (
        <>
            {getBlocks(props.blocks, locale, locales, props.articles, props.cms_blocks)}
        </>
    )
}