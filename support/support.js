import { useRouter } from "next/router"

export function getMainAddress(url, forced_locale) {
    let current_locale;

    if (forced_locale) {
        current_locale = forced_locale;
    } else {
        let { locale } = useRouter();
        current_locale = locale;
    }

    let new_url = url;

    if (new_url[0] === '/') {
        new_url = new_url.slice(1);
    }

    if (new_url == '') {
        if (current_locale == 'ru') { 
            return '/';
        } else {
            return '/' + current_locale;
        }
    }

    if (current_locale == 'ru') {
        if (new_url.includes("#")) {
            return "/" + new_url;
        }
    
        return "/" + new_url;
    } else {
        if (new_url.includes("#")) {
            return "/" + new_url;
        }
    
        return "/" + current_locale + "/" + new_url;
    }
}

export function getCanonicalURL() {
  const router = useRouter();
  const siteUrl = host;
  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];
  let canonicalUrl = siteUrl + getMainAddress((router.asPath === "/" ? "" : cleanPath));

  if (canonicalUrl[canonicalUrl.length - 1] === '/') {
    canonicalUrl = canonicalUrl.substring(0, canonicalUrl.length-1)
  }

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};

export function getAlternateURL() {
    const { locale } = useRouter();

    let url;

    if (locale == 'ru') { 
        url = host;
    } else {
        url = host + '/' + locale
    }
  
    return (
      <link rel="alternate" href={url} hrefLang={locale}/>
    );
};

export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}