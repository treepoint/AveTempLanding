const fs = require('fs');

let folder = "./DB";

function getData() {
    const files = fs.readdirSync(folder);

    let pages = []

    files.forEach(file => {
        if (file.includes('.json')) {
            let data = fs.readFileSync(folder + '/' + file , { encoding: 'utf8', flag: 'r' });

            pages.push({url : file.replace('.json', ''), data: JSON.parse(data)})
        }
    })

    return(pages);
}

export async function getPagesList() {
    return getData()
}

export default function handler(req, res) {
  res.status(200).json(getData())
}
  