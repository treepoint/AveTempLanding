import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import { wrapper } from '../store/store';
import { Provider } from 'react-redux'

import Layout from "../components/Layout/Layout"

import en from "../lang/en.json"
import ru from "../lang/ru.json"

import "../styles/globals.scss"

const messages = {
  ru,
  en,
};

function App({ Component, ...rest }) {
  const { locale } = useRouter();

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  let title;
  let description;

  if (pageProps.title) {
    title = {value: pageProps.title};
  } else {
    title = Component.title;
  }

  if (pageProps.description) {
    description = {value: pageProps.description};
  } else {
    description = Component.description;
  }

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout dir={"ltr"} title={title} description={description}>
            <Component {...pageProps} dir={"ltr"} />
        </Layout>
      </IntlProvider>
    </Provider>
  );
}

export default App;
