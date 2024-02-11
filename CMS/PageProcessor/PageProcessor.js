import { useRouter } from "next/router"
import { parseContent } from "../contentParser.js"

import BlocksConstructor from "../BlocksConstructor/BlocksConstructor.js"
import Screen from "../../elements/Screen/Screen"

import { useDispatch } from 'react-redux'
import { changeMenu } from "../../store/features/menuSlice.js"

export default function PageProcessor(props) {
  const { locale } = useRouter();
  const dispatch = useDispatch();

  let page = props.page;
  let menu = page.menu;
  let screens = page[locale].screens;

  let articles = props.articles;
  let blocks = props.blocks;

  dispatch(changeMenu(menu));

  function getColumnsCount(image, second_content) {
    if (!image && !second_content) {
      return 1;
    } else {
      return 2;
    }
  }

  function getPage(screens, columns) {
    let result = [];

    if (screens) {
      screens.forEach((screen, index) => {
        result.push(
            <Screen 
                key={index}
                h2={screen.h2}
                name={index == 0 ? page.name : null} 
                main_content={parseContent(screen.content)}
                image={screen.image}
                image_priority={100}
                half={columns == 2 ? true : false}
                alt={screen.image_alt}
                reverse={screen.reverse}
                centered={screen.centered}
                columns={getColumnsCount(screen.image, screen.second_content_block)}
                second_content={
                  <BlocksConstructor 
                    cms_blocks={blocks} 
                    blocks={[{'name' : screen.additional_block}]} 
                    articles={articles}
                  />
                }
            />
        )
      });
    }

    if (columns == 2) {
      return <div className="two_columns">{result}</div>
    }

    return result;
  }

  return (
    <>
        <h1>{page[locale].h1}</h1>
        {getPage(screens, page.columns)}
        <BlocksConstructor 
          cms_blocks={blocks} 
          blocks={page.blocks_below} 
          articles = {props.articles}
        />
    </>
  )
}
