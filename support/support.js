import { useRouter } from "next/router"
import Link from "next/link"

export function getMainAddress(url) {
    const { locale } = useRouter();

    let new_url = url;

    if (new_url[0] === '/') {
        new_url = new_url.slice(1);
    }

    if (new_url == '') {
        if (locale == 'ru') { 
            return '/'
        } else {
            return '/'+locale
        }
    }

    if (locale == 'ru') {
        if (new_url.includes("#")) {
            return "/" + new_url;
        }
    
        return "/" + new_url;
    } else {
        if (new_url.includes("#")) {
            return "/" + new_url;
        }
    
        return "/" + locale + "/" + new_url;
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

export function parseContent(content) {
    let ol_list_processed = false;
    let ul_list_processed = false;

    let list = [];

    return content.map((item, index) => {
        //Ссылки
        if (item.includes('<Link')) {
          return (parsePwithLink(item, index));        
        }

        //Нумерованный список
        if (item.includes('<ol')) {
            ol_list_processed = true;
            return;
        }

        if (item.includes('<li') && ol_list_processed) {
            list.push(<li>{item.replace("<li>", "").replace("</li>", "")}</li>)
            return;
        }

        if (item.includes('/ol>')) {
            ol_list_processed = false;
            return <ol>{list}</ol>
        }

        //Маркированный список
        if (item.includes('<ul')) {
            ul_list_processed = true;
            return;
        }

        if (item.includes('<li') && ul_list_processed) {
            list.push(<li>{item.replace("<li>", "").replace("</li>", "")}</li>)
            return;
        }

        if (item.includes('/ul>')) {
            ul_list_processed = false;
            return <ul>{list}</ul>
        }

        //Обычные параграфы
        return <p key={index}>{item}</p>
    })
}

export function parsePwithLink(p, index) {
    let before_link = p.split('<Link')[0];
  
    let prelink = p.split("href='")[1];
    let link_href = prelink.split("'>")[0];

    let prelink_text = prelink.split("'>")[1];
    let link_text = prelink_text.split('</Link>')[0];
  
    let after_link = prelink_text.split('</Link>')[1];

    if (link_href.includes("https://")) {
        return (
            <p key={index}>
              {before_link}<a href={link_href}>{link_text}</a>{after_link}
            </p>
          ); 
    } else {
        return (
            <p key={index}>
              {before_link}<Link href={getMainAddress(link_href)}>{link_text}</Link>{after_link}
            </p>
          ); 
    }
  }