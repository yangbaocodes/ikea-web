const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/vappeby-wa-bo-bi-led-zhao-ming-deng-ke-chong-dian-shi-nei-wai-liang-yong-bai-se__1108746_pe869644_s5.jpg',
    filename: 'inspiration-vappeby.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/raskoeg-la-si-ke-ge-xiao-che-bai-se__1108747_pe869645_s5.jpg',
    filename: 'inspiration-raskoeg.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/brimnes-bu-li-mu-nei-si-chuang-tou-gui-bai-se__1108748_pe869646_s5.jpg',
    filename: 'inspiration-brimnes.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/korken-kao-ken-guan-dai-gai-zi-tou-ming__1108749_pe869647_s5.jpg',
    filename: 'inspiration-korken.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/trofast-te-luo-fa-si-te-chu-wu-zu-he-bai-se-cai-se__1108750_pe869648_s5.jpg',
    filename: 'inspiration-trofast.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/sundvik-sang-wei-ke-er-tong-chuang-bai-se__0636721_pe697928_s5.jpg',
    filename: 'inspiration-sundvik.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/applaro-a-pu-lai-lu-2-ren-shi-wai-sha-fa__0836810_pe601663_s5.jpg',
    filename: 'inspiration-applaro.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/hemnes-han-ni-si-men-ting-gui-bai-se__0710687_pe727645_s5.jpg',
    filename: 'inspiration-hemnes.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/askholmen-a-si-ke-meng-yang-tai-zhuo-jiao-he__0619287_pe688945_s5.jpg',
    filename: 'inspiration-askholmen.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/markus-ma-ku-si-ban-gong-yi-hei-se__0724714_pe734602_s5.jpg',
    filename: 'inspiration-markus.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/ekedalen-yi-ke-da-lan-ke-la-zhang-can-zhuo-hei-se__0736963_pe740839_s5.jpg',
    filename: 'inspiration-ekedalen.jpg'
  },
  {
    url: 'https://www.ikea.cn/cn/zh/images/products/tillreda-ti-rui-da-wei-bo-lu-bai-se__0712345_pe728740_s5.jpg',
    filename: 'inspiration-tillreda.jpg'
  }
];

const downloadImage = async (url, filename) => {
  const targetDir = path.join(process.cwd(), 'public/images/inspiration');
  
  // 确保目标目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filepath = path.join(targetDir, filename);
  const file = fs.createWriteStream(filepath);

  return new Promise((resolve, reject) => {
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