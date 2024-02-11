import Link from "next/link"
import { getMainAddress } from "../support/support"

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

function parsePwithLink(p, index) {
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