import { useRouter } from "next/router"
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.js"
import Support from "../../components/Support/Support"
import DownloadButton from "../../elements/DownloadButton/DownloadButton"
import Promo from "../../StaticBlocks/Promo/Promo"
import Articles from "../../StaticBlocks/Articles/Articles"
import HelpfulMaterials from "../../StaticBlocks/HelpfulMaterials/HelpfulMaterials"
import Block404 from "../../StaticBlocks/Block404/Block404.js"
import SocialIcons from "../../StaticBlocks/SocialIcons/SocialIcons.js"

import Screen from "../../elements/Screen/Screen"
import { parseContent } from "../contentParser.js"

function getH2(block, locale) {  
  if (block.title) {
    return block.title[locale];
  }
}

function getBlocks(blocks, locale, articles, cms_blocks) {
    let result = [];

    let index = 0;

    if (blocks) {
      blocks.forEach(block => {
        let h2 = null;
        h2 = getH2(block, locale);

        index += 1;

        if (block.name == "SocialIcons") {
          result.push(<SocialIcons key={index}/>)
        }
    
        if (block.name == "Support") {
          result.push(<Support key={index} h2={h2}/>)
        }
    
        if (block.name == "DownloadButton") {
          result.push(<DownloadButton key={index} isCentered/>)
        }
    
        if (block.name == "Promo") {
          result.push(<Promo key={index}/>)
        }

        if (block.name == "FeedbackForm") {
          result.push(<FeedbackForm key={index}/>)
        }
  
        if (block.name == "Articles") {
          result.push(<Articles articles = {articles} h2={h2}/>)
        }

        if (block.name == "HelpfulMaterials") {
          result.push(<HelpfulMaterials h2={h2}/>)
        }

        if (block.name == "Block404") {
          result.push(<Block404/>)
        }

        block = parseCMSblock(cms_blocks, block.name, h2, articles, index);

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

function parseCMSblock(cms_blocks, name, h2, articles, index=0) {
  const { locale } = useRouter();

  if (!cms_blocks) {
    return;
  }

  let result = [];
  let two_columns = false;
  for (let block of cms_blocks) {
    if (block.url == name) {

      if (block.data.columns == 2) {
        two_columns = true;
      }

      let screen_count = 0;

      for (let screen of block.data[locale].screens) {
        screen_count += 1;

        result.push(<Screen 
                      key={screen_count}
                      h2={screen_count == 1 ? h2 : null}
                      name={name} 
                      main_content={parseContent(screen.content)}
                      image={screen.image}
                      image_priority={100}
                      image_style={screen.image_style}
                      alt={screen.image_alt}
                      reverse={screen.reverse}
                      centered={screen.centered}
                      half={two_columns}
                      columns={getColumnsCount(screen.image, screen.second_content_block)}
                      second_content={
                        getBlocks([{"name" : screen.second_content_block}], 
                        locale, 
                        articles, 
                        cms_blocks)
                      }
                      additional_block_below={
                        getBlocks([{"name" : screen.additional_block_below}], 
                        locale, 
                        articles, 
                        cms_blocks)
                      }
                      additinonal_block_above={
                        getBlocks([{"name" : screen.additinonal_block_above}], 
                        locale, 
                        articles, 
                        cms_blocks)
                      }
                  />);
      }
    }  
  }

  if (two_columns) {
    return <div key={index} className="two_columns">{result}</div>
  }

  return result;
}

export default function BlocksConstructor(props) {
    const { locale } = useRouter();

    return (
        <>
            {getBlocks(props.blocks, locale, props.articles, props.cms_blocks)}
        </>
    )
}