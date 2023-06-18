import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Layout from "../components/Layout/Layout";

import en from "../lang/en.json";
import ru from "../lang/ru.json";

import "../styles/globals.scss";

const messages = {
  ru,
  en,
};

function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout dir={"ltr"}>
        <Component {...pageProps} dir={"ltr"} />
      </Layout>
    </IntlProvider>
  );
}

export default App;
