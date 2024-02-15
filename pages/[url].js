import PageProcessor from "../CMS/PageProcessor/PageProcessor"
import { getPageByUrl } from "./api/[url]"
import { getPagesList } from "./api/"
import { getArticlesList } from "./api/articles"
import { getBlocksList } from "./api/blocks"

export const getStaticProps = async (context) => {
  let page;

  if (process.env.API_URL.includes('localhost')) { page = await getPageByUrl(context.params.url); }
  else { page = await fetch(process.env.API_URL + '/' + context.params.url).json(); } 

  let articles;

  if (process.env.API_URL.includes('localhost')) { articles = await getArticlesList(); }
  else { articles = await fetch(process.env.API_URL + '/articles/').json(); } 

  let blocks;

  if (process.env.API_URL.includes('localhost')) { blocks = await getBlocksList(); }
  else { blocks = await fetch(process.env.API_URL + '/blocks/').json(); } 

  if (page.status == "error") {
    return { 
      props: { 
        page: page,
        articles: articles,
        blocks: blocks
      },
      redirect: {
        destination: context.locale + '/404',
      },
      revalidate: parseInt(process.env.cache_revalidate_time), 
    }; 
  }

  return { 
    props: { 
      page: page,
      articles: articles,
      blocks: blocks,
      description: page[context.locale].description,
      title: page[context.locale].title
    },
    revalidate: parseInt(process.env.cache_revalidate_time), 
  }; 
};

export const getStaticPaths = async () => { 
  let data;

  if (process.env.API_URL.includes('localhost')) { data = await getPagesList(); }
  else { data = await fetch(process.env.API_URL).json(); } 

  const paths = data.filter(item => item.url != '404').map((page) => ({
    params: { url: page.url },
  }));

  return { paths, fallback: 'blocking' };
}

export default function RootPage(props) {
  return (
    <PageProcessor 
      page={props.page}
      articles={props.articles}
      blocks={props.blocks}
    />
  )
}
