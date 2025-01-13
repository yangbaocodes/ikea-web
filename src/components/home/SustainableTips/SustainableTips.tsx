'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tips = [
  {
    id: '1',
    title: '节能照明',
    description: '选择LED灯具，节能环保',
    image: '/images/products/placeholder.jpg',
    link: '/sustainable/lighting',
  },
  {
    id: '2',
    title: '可持续材料',
    description: '使用环保可再生材料的家具',
    image: '/images/products/placeholder.jpg',
    link: '/sustainable/materials',
  },
  {
    id: '3',
    title: '节水技巧',
    description: '智能水龙头和节水配件',
    image: '/images/products/placeholder.jpg',
    link: '/sustainable/water',
  },
  {
    id: '4',
    title: '废物回收',
    description: '分类收纳和回收解决方案',
    image: '/images/products/placeholder.jpg',
    link: '/sustainable/recycling',
  },
];

const sustainableProducts = [
  {
    id: '1',
    name: 'TRÅDFRI 特拉德夫里',
    description: 'LED智能灯泡',
    price: 49.99,
    image: 'https://www.ikea.cn/cn/zh/images/products/tradfri-te-la-fu-li-led-deng-pao-e27-806-lu-men-ke-tiao-guang-qiu-xing-bai-se-guang-pu__0710068_pe727343_s5.jpg?f=xl',
    link: '/products/tradfri-1',
    ecoLabel: '节能产品',
  },
  {
    id: '2',
    name: 'ODGER 奥格',
    description: '可回收材料椅子',
    price: 299,
    image: 'https://www.ikea.cn/cn/zh/images/products/odger-ao-ge-yi-zi-lan-se__0739469_pe741770_s5.jpg?f=xl',
    link: '/products/odger-1',
    ecoLabel: '可回收材料',
  },
  {
    id: '3',
    name: 'BROGRUND 布鲁格',
    description: '节水龙头',
    price: 199,
    image: 'https://www.ikea.cn/cn/zh/images/products/brogrund-bu-lu-ge-long-tou-chrome-plated__0761445_pe751271_s5.jpg?f=xl',
    link: '/products/brogrund-1',
    ecoLabel: '节水产品',
  },
];

export default function SustainableTips() {
  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">打造更可持续的家</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            发现环保小贴士和可持续产品，一起为地球做出贡献
          </p>
        </div>

        {/* 环保小贴士 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tips.map((tip) => (
            <Link
              key={tip.id}
              href={tip.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600">
                  {tip.description}
                </p>
                <div className="mt-4 flex items-center text-green-600 font-medium">
                  了解更多
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 可持续产品推荐 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sustainableProducts.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {product.ecoLabel}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="text-lg font-bold text-green-600">
                  ¥{product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/sustainable"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
          >
            探索更多环保产品
          </Link>
        </div>
      </div>
    </section>
  );
} 