import { useRouter } from "next/router"
import { parseContent} from "../../support/support.js"

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

  function getPage(screens) {
    let result = [];

    if (screens) {
      screens.forEach((screen, index) => {
        result.push(
          <div key={index}>
            <Screen 
                name={index == 0 ? page.name : null} 
                main_content={parseContent(screen.content)}
                image={screen.image}
                image_priority={100}
                alt={screen.image_alt}
                reverse={screen.reverse}
                columns={2} 
                second_content={
                  <BlocksConstructor 
                    cms_blocks={blocks} 
                    blocks={[{'name' : screen.additional_block}]} 
                    articles={articles}
                  />
                }
            />
          </div>
        )
      });
    }
    return result;
  }

  return (
    <>
        <h1>{page[locale].h1}</h1>
        {getPage(screens)}
        <BlocksConstructor 
          cms_blocks={blocks} 
          blocks={page.blocks_below} 
          articles = {props.articles}
        />
    </>
  )
}
