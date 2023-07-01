import { useRouter } from "next/router"

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
            return "/"+new_url;
        }
    
        return "/"+new_url;
    } else {
        if (new_url.includes("#")) {
            return "/"+locale+new_url;
        }
    
        return "/"+locale+"/"+new_url;
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