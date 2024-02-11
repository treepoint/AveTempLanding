import ArticlePreview from "../../components/ArticlePreview/ArticlePreview.js"
import { useIntl } from "react-intl"

import styles from "./HelpfulMaterials.module.scss"

import "../../_globals.js"

export default function HelpfulMaterials(props) {
  const intl = useIntl();

  const for_what = intl.formatMessage({ id: "for_what" });
  const main_window_screenshot_url = intl.formatMessage({ id: "main_window_screenshot_url" });
  const main_window_screenshot_alt = intl.formatMessage({ id: "main_window_screenshot_alt" });
  
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
      <h2 className={styles.headline}>{props.h2}</h2>
      <div className={[styles.wrapper, styles.helpful_materials].join(' ')}>
        {getHelpfulMaterials()}
      </div>
    </>
  );
}
