import PageProcessor from "../../CMS/PageProcessor/PageProcessor"
import { getPageByUrl } from "./../api/[url]"

export const getStaticProps = async (context) => {
  let page;

  if (process.env.API_URL.includes('localhost')) { page = await getPageByUrl('404'); }
  else { page = await fetch(process.env.API_URL + '/404.json').json(); } 

  return { 
    props: { 
      page: page,
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
    />
  )
}
