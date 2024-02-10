import PageProcessor from "../../../cms/PageProcessor/PageProcessor"
import { getPageByUrl } from "../../api/articles/[url]"
import { getPagesList } from "../../api/articles"

const path = 'articles'

export const getStaticProps = async (context) => {
  let page;

  if (process.env.API_URL.includes('localhost')) { page = await getPageByUrl(context.params.url); }
  else { page = await fetch(process.env.API_URL + '/' + path + '/' + context.params.url).json(); } 

  if (page.status == "error") {
    return { 
      props: { 
        page: page
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
      description: page[context.locale].description,
      title: page[context.locale].title
    },
    revalidate: parseInt(process.env.cache_revalidate_time), 
  }; 
};

export const getStaticPaths = async () => { 
  let data;

  if (process.env.API_URL.includes('localhost')) { data = await getPagesList(); }
  else { data = await fetch(process.env.API_URL + '/' + path).json(); } 

  const paths = data.map((page) => ({
    params: { url: page.url },
  }));

  return { paths, fallback: 'blocking' };
}

export default function ArticlePage(props) {
  return (
    <PageProcessor 
      title={props.title}
      description={props.description}
      page={props.page}
    />
  )
}
