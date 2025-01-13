'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';

interface RecommendItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  backgroundColor: string;
  link: string;
  tag?: string;
  validDate?: string;
}

const recommendItems: RecommendItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&h=800&q=80',
    title: 'FOSSTA 弗斯塔',
    subtitle: '门垫, 橙子',
    description: '全新限定系列，开启新春好彩头',
    price: 39.99,
    backgroundColor: '#CC0008',
    link: '/products/fossta-doormat',
    tag: '新品'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=800&q=80',
    title: 'BEKVÄM 贝卡姆',
    subtitle: '梯子 3步, 黑色',
    description: '2024.11.28-2025.1.27，数量有限，售完即止',
    price: 199.00,
    originalPrice: 299.00,
    backgroundColor: '#0058A3',
    link: '/products/bekvam-stepladder',
    validDate: '2024.11.28-2025.1.27'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=800&h=800&q=80',
    title: 'HORNMAL 霍恩玛',
    subtitle: '休闲毯, 淡粉红色, 130x170厘米',
    description: '用更低的价格，打造更美好的日常生活',
    price: 79.99,
    originalPrice: 99.99,
    backgroundColor: '#E60012',
    link: '/products/hornmal-throw',
    tag: '更低价格'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=800&h=800&q=80',
    title: 'HORNMAL 霍恩玛',
    subtitle: '休闲毯, 淡粉红色',
    description: '用更低的价格，打造更美好的日常生活',
    price: 79.99,
    backgroundColor: '#E60012',
    link: '/products/hornmal-throw'
  }
];

export default function RecentRecommend() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = recommendItems.length;
  const maxIndex = Math.max(0, totalItems - 3);

  const handleScroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">近期推荐</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 商品列表容器 */}
          <div className="w-[1248px] mx-auto overflow-hidden">
            {/* 左右切换按钮 */}
            {isHovered && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-[150px] top-[336px] z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-x-1/2"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    aria-label="上一页"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                  </button>
                )}
                {currentIndex < maxIndex && (
                  <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-[85px] top-[336px] z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-x-1/2"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    aria-label="下一页"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                  </button>
                )}
              </>
            )}

            <div
              ref={scrollContainerRef}
              className="flex gap-6 transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (400 + 24)}px)`,
                width: `${(400 + 24) * recommendItems.length - 24}px`
              }}
            >
              {recommendItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex-none w-[400px] h-[672px] group"
                >
                  {/* 图片区域 */}
                  <div className="relative h-[400px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    {item.tag && (
                      <div className="absolute top-4 left-4">
                        <div 
                          className={`inline-block px-2 py-1 text-sm text-white ${
                            item.tag === '新品' ? 'bg-[#CC0008]' : 'bg-[#E60012]'
                          }`}
                        >
                          {item.tag}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 text-white text-right">
                      <div className="flex items-baseline gap-2 justify-end">
                        <span className="text-3xl font-bold">¥{item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="text-base line-through opacity-80">¥{item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* 内容区域 */}
                  <div 
                    className="h-[272px] p-8"
                    style={{ backgroundColor: item.backgroundColor }}
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-base mb-1">{item.subtitle}</p>
                      <p className="text-base mb-6">{item.description}</p>
                      <div className="flex items-center text-base font-medium">
                        立即选购
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 底部分隔线和指示器 */}
          {maxIndex > 0 && (
            <div className="mt-12">
              <div className="w-[1248px] mx-auto">
                <div className="w-[1248px] flex">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      className={`h-[2px] flex-1 transition-all duration-300 ${
                        currentIndex === index 
                          ? 'bg-black' 
                          : 'bg-gray-200'
                      }`}
                      onClick={() => {
                        setCurrentIndex(index);
                      }}
                      aria-label={`滚动到第 ${index + 1} 页`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 