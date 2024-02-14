import Link from "next/link"
import DownloadLink from "../elements/DownloadLink/DownloadLink"
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

        if (item.includes('<DownloadLink/>')) {
            return (parsePwithDownloadLink(item, index));       
          }
        
        //Нумерованный список
        if (item.includes('<ol')) {
            ol_list_processed = true;
            return;
        }

        if (item.includes('<li') && ol_list_processed) {
            list.push(<li key={index}>{item.replace("<li>", "").replace("</li>", "")}</li>);
            return;
        }

        if (item.includes('/ol>')) {
            ol_list_processed = false;
            return <ol key={index}>{list}</ol>;
        }

        if (item.includes('<hint') && ol_list_processed) {
            list.push(<div key={index} className="hint">{item.replace("<hint>", "").replace("</hint>", "")}</div>);
            return;
        }

        //Маркированный список
        if (item.includes('<ul')) {
            ul_list_processed = true;
            return;
        }

        if (item.includes('<li') && ul_list_processed) {
            list.push(<li key={index}>{item.replace("<li>", "").replace("</li>", "")}</li>);
            return;
        }

        if (item.includes('/ul>')) {
            ul_list_processed = false;
            return <ul key={index}>{list}</ul>
        }

        if (item.includes('<hint') && ul_list_processed) {
            list.push(<div key={index} className="hint">{item.replace("<hint>", "").replace("</hint>", "")}</div>);
            return;
        }

        //Обычные параграфы
        return <p key={index}>{item}</p>;
    })
}

function parsePwithDownloadLink(p, index) {
    let before_link = p.split('<DownloadLink>')[0];
    let text = p.split('<DownloadLink>')[1].split('<DownloadLink/>')[0];
    let after_link = p.split('<DownloadLink/>')[1];

    return <p key={index}>{before_link}<DownloadLink text={text}/>{after_link}</p>
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