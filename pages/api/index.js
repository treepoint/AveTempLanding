const fs = require('fs');

let acticles_folder = "./DB";

function getData() {
    const files = fs.readdirSync(acticles_folder);

    let articles = []

    files.forEach(file => {
        if (file.includes('.json')) {
            let data = fs.readFileSync(acticles_folder + '/' + file , { encoding: 'utf8', flag: 'r' });

            articles.push({url : file.replace('.json', ''), data: JSON.parse(data)})
        }
    })

    return(articles);
}

export async function getPagesList() {
    return getData()
}

export default function handler(req, res) {
  res.status(200).json(getData())
}
  