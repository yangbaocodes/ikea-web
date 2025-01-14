'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';

interface RoomItem {
  id: string;
  name: string;
  image: string;
  link: string;
}

const roomItems: RoomItem[] = [
  {
    id: '1',
    name: '浴室',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/bathroom'
  },
  {
    id: '2',
    name: '书房',
    image: 'https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/office'
  },
  {
    id: '3',
    name: '门厅',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/hallway'
  },
  {
    id: '4',
    name: '阳台',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/balcony'
  },
  {
    id: '7',
    name: '客厅',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/living-room'
  },
  {
    id: '8',
    name: '厨房',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/rooms/kitchen'
  }
];

export default function ExploreRooms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = roomItems.length;
  const maxIndex = Math.max(0, totalItems - 5);

  const handleScroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-12 bg-white">
      <div className="w-[1280px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">从房间开始探索</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 卡片容器 */}
          <div className="w-[1280px] mx-auto overflow-hidden">
            {/* 左右切换按钮 */}
            {isHovered && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-[-30px] top-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-y-1/2"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    aria-label="上一页"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                  </button>
                )}
                {currentIndex < maxIndex && (
                  <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-[-30px] top-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-y-1/2"
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
              className="flex gap-4 transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (244 + 16)}px)`,
                width: `${(244 + 16) * roomItems.length - 16}px`
              }}
            >
              {roomItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="relative w-[244px] aspect-[4/5] group overflow-hidden flex-none"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="244px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-[72px] h-[72px] bg-white rounded-full text-black text-base font-medium shadow-lg">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 底部分隔线和指示器 */}
          {maxIndex > 0 && (
            <div className="mt-12">
              <div className="w-[1280px] mx-auto">
                <div className="w-[1280px] flex">
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