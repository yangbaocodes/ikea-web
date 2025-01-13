'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductSpot {
  id: string;
  name: string;
  price: number;
  position: {
    top: string;
    left: string;
  };
  isLimited?: boolean;
}

interface ImageSection {
  id: string;
  image: string;
  className: string;
  products: ProductSpot[];
  isNew?: boolean;
}

const imageSections: ImageSection[] = [
  {
    id: '1',
    image: 'https://content-service-oss.aidesign.ingka-internal.cn/content-hub/f96ef328-1efa-4dd7-befb-0fa4910a9d15/3e3a56ec-03a4-4148-b4b1-ab9e9e07b5d2.jpeg',
    className: 'col-span-2 row-span-2',
    products: [
      {
        id: '1',
        name: 'MÅVINN 马维宁',
        price: 299.00,
        isLimited: true,
        position: {
          top: '10%',
          left: '20%'
        }
      }
    ]
  },
  {
    id: '2',
    image: 'https://file.app.ikea.cn/cn/zh/images/products/blasverk-bu-luo-wei-tai-deng-hong-se__1326179_pe944581_s5.jpg',
    className: 'col-span-1',
    isNew: true,
    products: []
  },
  {
    id: '3',
    image: 'https://static.web.ikea.cn/content/u/20241220/bb1be57e5c70454aa44fe301589f0fd3.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_800',
    className: 'col-span-1',
    products: []
  },
  {
    id: '4',
    image: 'https://static.web.ikea.cn/content/u/20241220/bb1be57e5c70454aa44fe301589f0fd3.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_800',
    className: 'col-span-1',
    products: []
  }
];

export default function NewYearAtmosphere() {
  return (
    <section className="py-12">
      <div className="w-[1280px] mx-auto">
        {/* 头部文案区域 */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">装点新年氛围</h2>
            <p className="text-gray-600">浏览并选购我们全新推出的产品！每一款产品都能契合不同房间和风格，带给你新的视觉亮点。</p>
          </div>
          <Link
            href="/collections/new-year"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            发现更多新品
          </Link>
        </div>

        {/* 图片网格区域 */}
        <div className="grid grid-cols-3 gap-4 h-[830px]">
          {/* 左侧大图 */}
          <div className="col-span-2 relative group overflow-hidden">
            <Image
              src={imageSections[0].image}
              alt="新年氛围"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {imageSections[0].products.map((product) => (
              <div
                key={product.id}
                className="absolute"
                style={{ top: product.position.top, left: product.position.left }}
              >
                <button className="relative w-6 h-6 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-1 h-1 bg-black rounded-full" />
                  </span>
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#CC0008] text-white text-xs px-2 py-0.5 rounded">新品</span>
                      {product.isLimited && (
                        <span className="bg-black text-white text-xs px-2 py-0.5 rounded">限定款</span>
                      )}
                    </div>
                    <h3 className="text-base font-medium mb-1">{product.name}</h3>
                    <div className="text-sm">
                      <span className="text-xs align-top">¥</span>
                      <span className="font-medium">{Math.floor(product.price)}</span>
                      {product.price % 1 !== 0 && (
                        <span className="text-xs">.{(product.price % 1).toFixed(2).slice(2)}</span>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* 右侧图片列 */}
          <div className="space-y-4">
            {/* 新品区块 */}
            <div className="relative overflow-hidden h-[264px]">
              <div className="absolute inset-0 bg-[#CC5B00] flex items-center justify-center">
                <span className="text-white text-[80px] font-bold">新品</span>
              </div>
            </div>
            
            {/* 右下两张图片 */}
            {imageSections.slice(2).map((section) => (
              <div key={section.id} className="relative group overflow-hidden h-[264px]">
                <Image
                  src={section.image}
                  alt="新年氛围"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {section.products.map((product) => (
                  <div
                    key={product.id}
                    className="absolute"
                    style={{ top: product.position.top, left: product.position.left }}
                  >
                    <button className="relative w-6 h-6 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-1 h-1 bg-black rounded-full" />
                      </span>
                      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 w-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <h3 className="text-base font-medium mb-1">{product.name}</h3>
                        <div className="text-sm">
                          <span className="text-xs align-top">¥</span>
                          <span className="font-medium">{Math.floor(product.price)}</span>
                          {product.price % 1 !== 0 && (
                            <span className="text-xs">.{(product.price % 1).toFixed(2).slice(2)}</span>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 