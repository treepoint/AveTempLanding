import ArticlePreview from "../../components/ArticlePreview/ArticlePreview.js"
import { useRouter } from "next/router"
import { parseContent } from "../../support/support.js"

import styles from "./Articles.module.scss"

import "../../_globals.js"

export default function Articles(props) {
  const { locale } = useRouter();

  const articles = props.articles;
  
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

  
  return (
    <>
      <h2>{props.h2}</h2>
      <div className={styles.wrapper}>
        {getArticlesPreviews(articles)}
      </div>
    </>
  );
}
