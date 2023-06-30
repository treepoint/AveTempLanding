import Support from "../../components/Support/Support"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import { useIntl } from "react-intl"

import styles from "./Articles.module.scss"

import "../../_globals.js";

Articles.title = () => {
  const intl = useIntl();
  return intl.formatMessage({ id: "meta.title_articles" });
}

export default function Articles() {
  const intl = useIntl();

  const articles_headline = intl.formatMessage({ id: "articles_headline" });

  const about_turbo_header = intl.formatMessage({ id: "about_turbo_header" });
  const at_1 = intl.formatMessage({ id: "at_1" });
  const at_2 = intl.formatMessage({ id: "at_2" });
  const alt_cpu_turbo = intl.formatMessage({ id: "alt_cpu_turbo" });

  const how_descrease_temperature = intl.formatMessage({ id: "how_descrease_temperature" });
  const hdt_1 = intl.formatMessage({ id: "hdt_1" });
  const hdt_2 = intl.formatMessage({ id: "hdt_2" });
  const cpu_params = intl.formatMessage({ id: "cpu_params" });

  function getArticlesPreviews() {

    let articles = [
      {
        name: about_turbo_header, 
        url: 'articles/about_turbo', 
        description: [at_1, at_2],
        image_url: '/images/cpu_turbo.jpg',
        alt: alt_cpu_turbo
      },
      {
        name: how_descrease_temperature, 
        url: 'articles/how_descrease_temperature', 
        description: [hdt_1, hdt_2],
        image_url: '/images/cpu_params.png',
        alt: cpu_params
      }
    ]
    
    return articles.map(article => {
      return <ArticlePreview 
              name={article.name}
              url={article.url}
              description={article.description}
              image_url={article.image_url}
              alt={article.alt}
            />
    })
  }

  return (
    <>
      <h1 className={styles.headline}>{articles_headline}</h1>
      <div className={styles.wrapper}>
        {getArticlesPreviews()}
      </div>
      <Support/>
    </>
  );
}
