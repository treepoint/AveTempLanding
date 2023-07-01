import { useRouter } from "next/router"

export function getMainAddress(url) {
    const { locale } = useRouter();

    if (url == '') {
        if (locale == 'ru') { 
            return '/'
        } else {
            return '/'+locale
        }
    }

    if (locale == 'ru') {
        if (url.includes("#")) {
            return "/"+url;
        }
    
        return "/"+url;
    } else {
        if (url.includes("#")) {
            return "/"+locale+url;
        }
    
        return "/"+locale+"/"+url;
    }
}