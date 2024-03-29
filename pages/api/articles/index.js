const fs = require('fs');

let folder = "./DB/articles";

function getData() {
    const files = fs.readdirSync(folder);

    let articles = []

    files.forEach(file => {
        if (file.includes('.json')) {
            let data = fs.readFileSync(folder + '/' + file , { encoding: 'utf8', flag: 'r' });

            articles.push({url : file.replace('.json', ''), data: JSON.parse(data)})
        }
    })

    return(articles);
}

export async function getArticlesList() {
    return getData()
}

export default function handler(req, res) {
  res.status(200).json(getData())
}
  