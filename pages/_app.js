import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import Layout from "../components/Layout/Layout"

import en from "../lang/en.json"
import ru from "../lang/ru.json"

import "../styles/globals.scss"

const messages = {
  ru,
  en,
};

function App({ Component, ...pageProps }) {
  const { locale } = useRouter();

  let title;
  let description;

  if (pageProps.pageProps.title) {
    title = {value: pageProps.pageProps.title};
  } else {
    title = Component.title;
  }

  if (pageProps.pageProps.description) {
    description = {value: pageProps.pageProps.description};
  } else {
    description = Component.description;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout dir={"ltr"} title={title} description={description}>
        <Component {...pageProps} dir={"ltr"} />
      </Layout>
    </IntlProvider>
  );
}

export default App;
