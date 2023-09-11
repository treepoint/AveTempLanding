import { getArticleByUrl } from "../../api/articles/[url]"
import { getArticlesList } from "../../api/articles"
import { useRouter } from "next/router"

import { parseContent} from "../../../support/support.js"

import HowItWorksScreen from "../../../components/HowItWorksScreen/HowItWorksScreen"
import WhyScreen from "../../../components/WhyScreen/WhyScreen"
import FeatureScreen from "../../../components/FeatureScreen/FeatureScreen"
import HowToUseScreen from "../../../components/HowToUseScreen/HowToUseScreen"
import FeedbackScreen from "../../../components/FeedbackScreen/FeedbackScreen"
import RoadMapScreen from "../../../components/RoadMapScreen/RoadMapScreen"
import Support from "../../../components/Support/Support"
import DownloadButton from "../../../elements/DownloadButton/DownloadButton"
import Promo from "../../../components/Promo/Promo"

import Screen from "../../../elements/Screen/Screen"

export const getStaticProps = async (context) => {
  let article;

  if (process.env.API_URL.includes('localhost')) { article = await getArticleByUrl(context.params.url); }
  else { article = await fetch(process.env.API_URL + '/articles/' + context.params.url).json(); } 

  if (article.status == "error") {
    return { 
      props: { 
        article: article
      },
      redirect: {
        destination: context.locale + '/404',
      },
      revalidate: parseInt(process.env.cache_revalidate_time), 
    }; 
  }

  return { 
    props: { 
      article: article,
      description: article[context.locale].description,
      title: article[context.locale].title
    },
    revalidate: parseInt(process.env.cache_revalidate_time), 
  }; 
};

export const getStaticPaths = async () => { 
  let data;

  if (process.env.API_URL.includes('localhost')) { data = await getArticlesList(); }
  else { data = await fetch(process.env.API_URL + '/articles').json(); } 

  const paths = data.map((article) => ({
    params: { url: article.url },
  }));

  return { paths, fallback: 'blocking' };
}

function getH2(block, locale) {
  if (block.title) {
    return block.title[locale]
  }
}

function getAdditionalBelowBlocks(blocks, locale) {
  let result = [];

  blocks.forEach(block => {
    if (block.name == "FeatureScreen") {
      result.push(<FeatureScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "FeedbackScreen") {
      result.push(<FeedbackScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "HowItWorksScreen") {
      result.push(<HowItWorksScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "HowToUseScreen") {
      result.push(<HowToUseScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "Support") {
      result.push(<Support h2={getH2(block, locale)}/>)
    }

    if (block.name == "WhyScreen") {
      result.push(<WhyScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "RoadMapScreen") {
      result.push(<RoadMapScreen h2={getH2(block, locale)}/>)
    }

    if (block.name == "DownloadButton") {
      result.push(<DownloadButton isCentered/>)
    }
  })

  return result;
}

function getSecondContent(block) {
  if (block == "Promo") {
    return <Promo/>
  }
}

export default function ArticlePage(props) {
  const { locale } = useRouter();

  let article = props.article;

  let screens = article[locale].screens;

  function getArticle(screens) {
    let result = [];

    screens.forEach((screen, index) => {
      result.push(
        <div key={index}>
          <Screen 
              name={index == 0 ? article.name : null} 
              h1={index == 0 ? article[locale].h1 : null} 
              main_content={parseContent(screen.content)}
              image={screen.image}
              image_priority={100}
              alt={screen.image_alt}
              reverse={screen.reverse}
              columns={2} 
              second_content={getSecondContent(screen.additional_block)}
          />
        </div>
      )
    });

    return result;
  }

  return (
    <>
        {getArticle(screens)}
        {getAdditionalBelowBlocks(article.blocks_below, locale)}
    </>
  )
}
