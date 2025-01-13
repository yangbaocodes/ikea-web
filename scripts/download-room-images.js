const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/brimnes-bu-lin-mo-si-chuang-jia-bai-se__0749132_pe745501_s5.jpg',
    filename: 'bedroom.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/kivik-xi-wei-ke-san-ren-sha-fa-xu-da-lan-da__0959841_pe806095_s5.jpg',
    filename: 'living-room.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/metod-mei-tu-de-di-gui-bai-se__0756811_pe749081_s5.jpg',
    filename: 'kitchen.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/ekedalen-yi-ke-da-lun-ke-la-zhang-can-zhuo-chi-se__0736963_pe740827_s5.jpg',
    filename: 'dining-room.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/sundvik-sun-de-wei-ke-er-tong-chuang-bai-se__0637931_pe698633_s5.jpg',
    filename: 'children.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/godmorgon-gu-de-mo-en-xi-li-tai-gao-guang-bai-se__0756773_pe749052_s5.jpg',
    filename: 'bathroom.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/micke-mi-ke-shu-zhuo-bai-se__0736018_pe740345_s5.jpg',
    filename: 'office.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/trones-te-luo-na-si-xie-gui-bai-se__0710666_pe727725_s5.jpg',
    filename: 'entrance.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/askholmen-a-si-ke-er-men-yang-tai-zhuo-jia-zhu-se__0619287_pe688937_s5.jpg',
    filename: 'balcony.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/applaro-a-pu-lai-luo-hu-wai-can-zhuo-jia-zhu-se__0619294_pe688944_s5.jpg',
    filename: 'outdoor.jpg'
  }
];

// 确保目录存在
const imagesDir = path.join(process.cwd(), 'public', 'images', 'rooms');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  });
}

async function downloadAll() {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAll(); 