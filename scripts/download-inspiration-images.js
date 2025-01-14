const https = require('https');
const fs = require('fs');
const path = require('path');

const inspirationImages = [
  // 热销榜图片
  {
    // 抽屉柜系列
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/malm-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/malm-2.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/kullen-1.jpg',
    retries: 3
  },
  // 装饰画系列
  {
    url: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/pjatteryd-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/bjorksta-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/gronby-1.jpg',
    retries: 3
  },
  // 晾衣架系列
  {
    url: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/mulig-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/nikkeby-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/rigga-1.jpg',
    retries: 3
  },
  // 收纳盒系列
  {
    url: 'https://images.unsplash.com/photo-1588931894289-fe166099108c?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/kuggis-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1588931894289-fe166099108c?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/samla-1.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1588931894289-fe166099108c?auto=format&fit=crop&w=72&h=72&q=80',
    filename: 'products/variera-1.jpg',
    retries: 3
  },

  // 家居灵感图片
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-bedroom.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-kitchen.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-bathroom.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-office.jpg',
    retries: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-hallway.jpg',
    retries: 3
  }
];

// 确保目录存在
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 下载单个图片
const downloadImage = async (imageConfig) => {
  const { url, filename, retries } = imageConfig;
  const targetDir = path.join(process.cwd(), 'public/images', path.dirname(filename));
  ensureDirectoryExists(targetDir);
  
  const filepath = path.join(process.cwd(), 'public/images', filename);
  
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(filepath);
    
    const request = https.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode !== 200) {
        fileStream.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded: ${filename}`);
        resolve();
      });
    });

    request.on('error', (err) => {
      fileStream.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });

    request.on('timeout', () => {
      request.destroy();
      fileStream.close();
      fs.unlink(filepath, () => {});
      reject(new Error('Request timeout'));
    });
  });
};

// 下载图片并处理重试
const downloadWithRetry = async (imageConfig) => {
  let lastError;
  
  for (let i = 0; i < imageConfig.retries; i++) {
    try {
      await downloadImage(imageConfig);
      return;
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${i + 1}/${imageConfig.retries} failed for ${imageConfig.filename}:`, error.message);
      
      if (i < imageConfig.retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
      }
    }
  }
  
  throw lastError;
};

// 主函数
async function main() {
  console.log('Starting to download inspiration and hot sales images...');
  
  for (const imageConfig of inspirationImages) {
    try {
      await downloadWithRetry(imageConfig);
    } catch (error) {
      console.error(`Failed to download ${imageConfig.filename} after all retries:`, error.message);
    }
  }
  
  console.log('Download process completed.');
}

main().catch(console.error); 