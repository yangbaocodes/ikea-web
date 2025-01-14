const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/vappeby-wa-po-bi-deng-xiang-deng-hui-se-tu-shi__1108743_pe869641_s5.jpg',
    filename: 'inspiration-vappeby.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/raskoeg-la-si-ke-ge-qiu-shou-tui-che-hei-se__1108744_pe869642_s5.jpg',
    filename: 'inspiration-raskoeg.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/brimnes-bu-li-mu-na-si-chuang-tou-gui-dai-chu-wu-ge-bai-se__1154392_pe886055_s5.jpg',
    filename: 'inspiration-brimnes.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/korken-kao-ken-guan-zi-dai-sai-zi-tou-1-sheng__0713739_pe729731_s5.jpg',
    filename: 'inspiration-korken.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/ikea-365-wan-1-2-sheng-bai-se__0712846_pe729102_s5.jpg',
    filename: 'inspiration-365-bowl.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/kivik-xi-wei-ke-san-zuo-sha-fa-with-chaise-longue-kelinge-hui-se__1097186_pe864692_s5.jpg',
    filename: 'inspiration-kivik.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/trones-te-luo-si-xie-gui-cun-wu-gui-52x39-cm-bai-se__0710666_pe727636_s5.jpg',
    filename: 'inspiration-trones.jpg'
  },
  // 儿童房图片
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/trofast-te-luo-fa-si-te-chu-wu-zu-he-bai-se-cai-se__0751571_pe747074_s5.jpg',
    filename: 'inspiration-trofast.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/sundvik-sun-de-wei-ke-er-tong-chuang-bai-se__0937501_pe793736_s5.jpg',
    filename: 'inspiration-sundvik.jpg'
  },
  // 户外图片
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/aepplaroe-a-pu-lou-2-zuo-shi-wai-sha-fa-tao-zhuang-hong-se-froesoen-duvholmen-fu-lu-sen-du-fu-he-men__0949883_pe800140_s5.jpg',
    filename: 'inspiration-applaro.jpg'
  }
];

const downloadImage = (url, filename) => {
  const targetDir = path.join(process.cwd(), 'public/images/inspiration');
  
  // 确保目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filepath = path.join(targetDir, filename);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(new Error(`Error downloading ${filename}: ${err.message}`));
    });
  });
};

const downloadAll = async () => {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAll(); 