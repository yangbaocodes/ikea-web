const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/ryet-lu-ye-te-led-deng-pao-e27-1055-lu-men-qiu-xing-nuan-bai-guang__0710068_pe727343_s5.jpg',
    filename: 'energy.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/sortera-suo-er-te-la-hui-shou-tong-dai-gai-bai-se__0710733_pe727731_s5.jpg',
    filename: 'waste.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/brogrund-bu-lu-ge-long-tou-chrome-plated__0761445_pe751271_s5.jpg',
    filename: 'water.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/behandla-bi-han-de-la-mu-cai-you-tou-guang__0710141_pe727383_s5.jpg',
    filename: 'furniture.jpg'
  }
];

// 确保目录存在
const dir = path.join(process.cwd(), 'public/images/sustainable');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 下载单个图片
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(dir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// 下载所有图片
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