const fs = require('fs');

let folder = "./DB/blocks";

function getData() {
    const files = fs.readdirSync(folder);

    let blocks = []

    files.forEach(file => {
        if (file.includes('.json')) {
            let data = fs.readFileSync(folder + '/' + file , { encoding: 'utf8', flag: 'r' });

            blocks.push({url : file.replace('.json', ''), data: JSON.parse(data)})
        }
    })

    return(blocks);
}

export async function getBlocksList() {
    return getData()
}

export default function handler(req, res) {
  res.status(200).json(getData())
}
  