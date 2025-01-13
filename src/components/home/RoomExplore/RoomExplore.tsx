'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface RoomItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

const roomItems: RoomItem[] = [
  {
    id: '1',
    title: '卧室',
    image: 'https://www.ikea.cn/cn/zh/images/products/brimnes-bu-lin-mo-si-chuang-jia-bai-se__0749132_pe745501_s5.jpg',
    link: '/rooms/bedroom'
  },
  {
    id: '2',
    title: '客厅',
    image: 'https://www.ikea.cn/cn/zh/images/products/kivik-xi-wei-ke-san-ren-sha-fa-xu-da-lan-da__0959841_pe806095_s5.jpg',
    link: '/rooms/living-room'
  },
  {
    id: '3',
    title: '厨房',
    image: 'https://www.ikea.cn/cn/zh/images/products/metod-mei-tu-de-di-gui-bai-se__0756811_pe749081_s5.jpg',
    link: '/rooms/kitchen'
  },
  {
    id: '4',
    title: '餐厅',
    image: 'https://www.ikea.cn/cn/zh/images/products/ekedalen-yi-ke-da-lun-ke-la-zhang-can-zhuo-chi-se__0736963_pe740827_s5.jpg',
    link: '/rooms/dining-room'
  },
  {
    id: '5',
    title: '儿童',
    image: 'https://www.ikea.cn/cn/zh/images/products/sundvik-sun-de-wei-ke-er-tong-chuang-bai-se__0637931_pe698633_s5.jpg',
    link: '/rooms/children'
  },
  {
    id: '6',
    title: '浴室',
    image: 'https://www.ikea.cn/cn/zh/images/products/godmorgon-gu-de-mo-en-xi-li-tai-gao-guang-bai-se__0756773_pe749052_s5.jpg',
    link: '/rooms/bathroom'
  },
  {
    id: '7',
    title: '书房和办公',
    image: 'https://www.ikea.cn/cn/zh/images/products/micke-mi-ke-shu-zhuo-bai-se__0736018_pe740345_s5.jpg',
    link: '/rooms/office'
  }
];

export default function RoomExplore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const itemWidth = 240; // 每个卡片的宽度
  const gapWidth = 20; // 卡片之间的间距
  const visibleItems = 5; // 可见卡片数量
  const totalItems = roomItems.length;
  const maxIndex = totalItems - visibleItems;

  useEffect(() => {
    checkScrollButtons();
  }, [currentIndex]);

  const checkScrollButtons = () => {
    setShowLeftButton(currentIndex > 0);
    setShowRightButton(currentIndex < maxIndex);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);
    
    setCurrentIndex(newIndex);
    
    if (containerRef.current) {
      const scrollAmount = (itemWidth + gapWidth) * newIndex;
      containerRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
  };

  return (
    <section className="py-12">
      <div className="w-[1280px] h-[400px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">从房间开始探索</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 左右切换按钮 */}
          {showLeftButton && isHovered && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-[150px] top-[160px] z-10 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}
          {showRightButton && isHovered && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-[70px] top-[160px] z-10 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          )}

          {/* 卡片容器 */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-5 transition-transform duration-300"
              style={{ width: `${(itemWidth + gapWidth) * totalItems}px` }}
            >
              {roomItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="relative w-[240px] h-[320px] group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <button className="absolute bottom-6 left-6 px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors">
                    {item.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* 底部指示器 */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`h-[2px] transition-all ${
                  index === currentIndex ? 'w-8 bg-black' : 'w-4 bg-gray-300'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  if (containerRef.current) {
                    const scrollAmount = (itemWidth + gapWidth) * index;
                    containerRef.current.style.transform = `translateX(-${scrollAmount}px)`;
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 