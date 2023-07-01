import { useRouter } from "next/router"

export function getMainAddress(url) {
    const { locale } = useRouter();

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