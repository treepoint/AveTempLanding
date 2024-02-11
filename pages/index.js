import PageProcessor from "../cms/PageProcessor/PageProcessor"
import { getPageByUrl } from "./api/[url]"
import { getBlocksList } from "./api/blocks"

export const getStaticProps = async (context) => {
  let page;

  if (process.env.API_URL.includes('localhost')) { page = await getPageByUrl('index'); }
  else { page = await fetch(process.env.API_URL + '/index.json').json(); } 

  let blocks;

  if (process.env.API_URL.includes('localhost')) { blocks = await getBlocksList(); }
  else { blocks = await fetch(process.env.API_URL + '/blocks/').json(); } 

  return { 
    props: { 
      page: page,
      blocks: blocks,
      description: page[context.locale].description,
      title: page[context.locale].title
    },
    revalidate: parseInt(process.env.cache_revalidate_time), 
  }; 
};

export default function HomePage(props) {
  return (
    <PageProcessor 
      page={props.page}
      blocks={props.blocks}
    />
  )
}
