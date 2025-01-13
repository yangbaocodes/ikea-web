const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/fossta-fu-si-ta-men-dian-ju-zi__1184637_pe897994_s5.jpg',
    filename: 'fossta.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/bekvaem-bei-ka-mu-ti-zi-3bu-hei-se__0870932_pe716638_s5.jpg',
    filename: 'bekvam.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/hornmal-huo-en-ma-xiu-xian-tan-dan-fen-hong-se__1108607_pe869591_s5.jpg',
    filename: 'hornmal.jpg'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/images/new-year', filename);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

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