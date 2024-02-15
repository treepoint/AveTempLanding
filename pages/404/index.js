import PageProcessor from "../../CMS/PageProcessor/PageProcessor"
import { getPageByUrl } from "../api/[url]"
import { getBlocksList } from "../api/blocks"

export const getStaticProps = async (context) => {
  let page;

  if (process.env.API_URL.includes('localhost')) { page = await getPageByUrl('404'); }
  else { page = await fetch(process.env.API_URL + '/404.json').json(); } 

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

export default function Page404(props) {
  return (
    <PageProcessor 
      page={props.page}
      blocks={props.blocks}
    />
  )
}
