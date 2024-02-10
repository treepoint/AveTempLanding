import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import { useIntl } from "react-intl"
import { useRouter } from "next/router"
import { getPagesList } from "../api/articles"
import { parseContent } from "../../support/support"

import styles from "./Articles.module.scss"

import "../../_globals.js"

export const getStaticProps = async () => {
  let articles;

  if (process.env.API_URL.includes('localhost')) { articles = await getPagesList(); }
  else { articles = await fetch(process.env.API_URL + '/articles/').json(); } 

  return { 
    props: { 
      articles: articles,
    },
    revalidate: parseInt(process.env.cache_revalidate_time), 
  }; 
};

Articles.title = () => {
  return { id: "meta.title_articles" };
}

Articles.description = () => {
  return { id: "meta.description_articles" };
}

export default function Articles(props) {
  const intl = useIntl();
  const { locale } = useRouter();

  const articles = props.articles;

  const articles_headline = intl.formatMessage({ id: "articles_headline" });

  const helpful_materials_headline = intl.formatMessage({ id: "helpful_materials_headline" });
  const for_what = intl.formatMessage({ id: "for_what" });
  const main_window_screenshot_url = intl.formatMessage({ id: "main_window_screenshot_url" });
  const main_window_screenshot_alt = intl.formatMessage({ id: "main_window_screenshot_alt" });
  
  function getArticlesPreviews(articles) {    
    return articles.map((article, index) => {
      return (
              <div key={index} className={styles.key_wrapper}>
                  <ArticlePreview 
                    name={article.data[locale].h1}
                    url={'articles/'+article.url}
                    description={parseContent(article.data[locale].screens[0].content)}
                    image_url={article.data[locale].screens[0].image}
                    alt={article.data[locale].screens[0].image_alt}
                  />
                </div>
            )
    })
  }

  function getHelpfulMaterials() {

    let articles = [
      {
        name: for_what, 
        url: '', 
        image_url: main_window_screenshot_url,
        alt: main_window_screenshot_alt
      }
    ]
    
    return articles.map((article, index) => {
      return (
              <div key={index}>
                <ArticlePreview 
                  name={article.name}
                  url={article.url}
                  image_url={article.image_url}
                  alt={article.alt}
                />
              </div>
              )
    })
  }

  return (
    <>
      <h1>{articles_headline}</h1>
      <div className={styles.wrapper}>
        {getArticlesPreviews(articles)}
      </div>
      <h2 className={styles.headline}>{helpful_materials_headline}</h2>
      <div className={[styles.wrapper, styles.helpful_materials].join(' ')}>
        {getHelpfulMaterials()}
      </div>
    </>
  );
}
