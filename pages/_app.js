import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import ru from "../lang/ru.json";

import "../styles/globals.css";

const messages = {
  ru,
  en,
};

function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={"ltr"} />
    </IntlProvider>
  );
}

export default App;
