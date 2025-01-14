const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // 热销榜图片
  {
    url: 'https://images.unsplash.com/photo-1556337137-c7de215dfa78?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'malm-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'malm-2.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'kullen-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'pjatteryd-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'bjorksta-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'gronby-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'mulig-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'nikkeby-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'rigga-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'kuggis-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'samla-1.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'variera-1.jpg',
    retryCount: 3
  },
  // 家居灵感图片
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-vappeby.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-raskoeg.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-brimnes.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-korken.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-trofast.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-sundvik.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-applaro.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-hemnes.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-askholmen.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-markus.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-ekedalen.jpg',
    retryCount: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=800&q=80',
    filename: 'inspiration/inspiration-tillreda.jpg',
    retryCount: 3
  }
];

// 确保目录存在
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 下载单个图片
const downloadImage = (imageConfig) => {
  return new Promise((resolve, reject) => {
    const { url, filename } = imageConfig;
    const targetDir = path.join(process.cwd(), 'public/images/products');
    const targetPath = path.join(targetDir, filename);
    
    // 确保目标目录存在
    ensureDirectoryExists(path.dirname(targetPath));

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(targetPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (error) => {
        fs.unlink(targetPath, () => {
          reject(new Error(`Failed to save ${filename}: ${error.message}`));
        });
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to download ${filename}: ${error.message}`));
    });
  });
};

// 带重试的下载
const downloadWithRetry = async (imageConfig) => {
  let lastError;
  
  for (let i = 0; i < imageConfig.retryCount; i++) {
    try {
      await downloadImage(imageConfig);
      return; // 成功下载，退出函数
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${i + 1}/${imageConfig.retryCount} failed for ${imageConfig.filename}:`, error.message);
      
      if (i < imageConfig.retryCount - 1) {
        // 等待一段时间后重试
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
      }
    }
  }

  throw new Error(`Failed to download ${imageConfig.filename} after all retries: ${lastError.message}`);
};

// 主函数
const main = async () => {
  console.log('Starting to download product images...');
  
  for (const imageConfig of images) {
    try {
      await downloadWithRetry(imageConfig);
    } catch (error) {
      console.error(error.message);
    }
  }
};

main(); 