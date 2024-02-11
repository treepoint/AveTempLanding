import { useRouter } from "next/router"
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.js"
import Support from "../../components/Support/Support"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Promo from "../../StaticBlocks/Promo/Promo"
import Articles from "../../StaticBlocks/Articles/Articles"
import HelpfulMaterials from "../../StaticBlocks/HelpfulMaterials/HelpfulMaterials"
import Page404 from "../../StaticBlocks/Page404/Page404"
import SocialIcons from "../../StaticBlocks/SocialIcons/SocialIcons.js"

import Screen from "../../elements/Screen/Screen"
import { parseContent } from "../contentParser.js"

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

        if (block.name == "SocialIcons") {
          result.push(<SocialIcons/>)
        }

        if (block.name == "FeedbackForm") {
          result.push(<FeedbackForm/>)
        }
    
        if (block.name == "Support") {
          result.push(<Support h2={h2}/>)
        }
    
        if (block.name == "DownloadButton") {
          result.push(<DownloadButton isCentered/>)
        }
    
        if (block.name == "Promo") {
          result.push(<Promo/>)
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

        block = parseCMSblock(cms_blocks, block.name, h2, articles);

        if (block) {
          result.push(block);
        }
      })
    }

    if (result.length == 0) {
      return;
    }

    return result;
  }

function getColumnsCount(image, second_content) {
  if (!image && !second_content) {
    return 1;
  } else {
    return 2;
  }
}

function parseCMSblock(cms_blocks, name, h2, articles) {
  const { locale, locales } = useRouter();

  for (let block of cms_blocks) {
    if (block.url == name) {
      for (let screen of block.data[locale].screens) {
        return <>
                  <Screen 
                    h2={h2}
                    name={name} 
                    main_content={parseContent(screen.content)}
                    image={screen.image}
                    image_priority={100}
                    image_style={screen.image_style}
                    alt={screen.image_alt}
                    reverse={screen.reverse}
                    centered={screen.centered}
                    columns={getColumnsCount(screen.image, screen.second_content_block)}
                    second_content={
                      getBlocks([{"name" : screen.second_content_block}], 
                      locale, 
                      locales, 
                      articles, 
                      cms_blocks)
                    }
                    additional_block_below={
                      getBlocks([{"name" : screen.additional_block_below}], 
                      locale, 
                      locales, 
                      articles, 
                      cms_blocks)
                    }
                    additinonal_block_above={
                      getBlocks([{"name" : screen.additinonal_block_above}], 
                      locale, 
                      locales, 
                      articles, 
                      cms_blocks)
                    }
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