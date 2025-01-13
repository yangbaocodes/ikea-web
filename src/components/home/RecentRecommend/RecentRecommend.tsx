'use client';

import React from 'react';
import Image from 'next/image';

interface RecommendItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  link: string;
  isNew?: boolean;
  validUntil?: string;
  priceTag?: string;
}

const recommendItems: RecommendItem[] = [
  {
    id: '1',
    title: 'FOSSTA 弗斯塔',
    description: '门垫, 橙子',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=400&h=400&q=80',
    link: '/products/fossta-doormat',
    isNew: true,
  },
  {
    id: '2',
    title: 'BEKVÄM 贝卡姆',
    description: '梯子 3步, 黑色',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&h=400&q=80',
    link: '/products/bekvam-stepladder',
    validUntil: '2024.11.28-2025.1.27',
  },
  {
    id: '3',
    title: 'HORNMAL 霍恩玛',
    description: '休闲毯, 淡粉红色, 130x170厘米',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=400&h=400&q=80',
    link: '/products/hornmal-throw',
    priceTag: '更低价格',
  },
];

export default function RecentRecommend() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">近期推荐</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="block group relative bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.isNew && (
                  <div className="absolute top-4 left-4 bg-[#CC0008] text-white px-3 py-1 text-sm">
                    新品
                  </div>
                )}
                {item.priceTag && (
                  <div className="absolute top-4 left-4 bg-[#CC0008] text-white px-3 py-1 text-sm">
                    {item.priceTag}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#111111]">¥{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-base text-gray-500 line-through">¥{item.originalPrice}</span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-[#111111] mb-1">{item.title}</h3>
                <p className="text-[#484848]">{item.description}</p>
                {item.validUntil && (
                  <div className="mt-2 text-sm text-[#484848]">
                    有效期限：{item.validUntil}
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0058A3] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#CC0008] text-white p-8 flex flex-col justify-between min-h-[200px]">
            <h3 className="text-2xl font-bold">探索当季新品</h3>
            <div>
              <p className="mb-4">全新限定系列，开启新春好彩头</p>
              <button className="text-white font-medium group flex items-center">
                立即选购
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          <div className="bg-[#0058A3] text-white p-8 flex flex-col justify-between min-h-[200px]">
            <h3 className="text-2xl font-bold">限时特惠</h3>
            <div>
              <p className="mb-4">2024.11.28-2025.1.27，数量有限，售完即止</p>
              <button className="text-white font-medium group flex items-center">
                立即选购
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          <div className="bg-[#E60012] text-white p-8 flex flex-col justify-between min-h-[200px]">
            <h3 className="text-2xl font-bold">更低价格，更多值得</h3>
            <div>
              <p className="mb-4">用更低的价格，打造更美好的日常生活</p>
              <button className="text-white font-medium group flex items-center">
                立即选购
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 