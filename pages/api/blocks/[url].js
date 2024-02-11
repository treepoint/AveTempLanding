const fs = require('fs');

let folder = "./DB/blocks";

function getData(url) {

    if(!fs.existsSync(folder + '/' + url + '.json')) {
      return({ "status" : "error"});
    }

    let data = fs.readFileSync(folder + '/' + url + '.json', { encoding: 'utf8', flag: 'r' });

    data = JSON.parse(data);

    data.name = url;

    return(data);
}

export async function getPageByUrl(url) {
    return getData(url)
}

export default function handler(req, res) {
  res.status(200).json(getData(req.query.url))
}
  