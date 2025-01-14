'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';

interface TipItem {
  id: string;
  title: string;
  image: string;
  link: string;
  isMain?: boolean;
  backgroundColor?: string;
}

const tipItems: TipItem[] = [
  {
    id: '1',
    title: '日常行为很重要，查看一些创意',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/tips',
    isMain: true,
    backgroundColor: '#00853E'
  },
  {
    id: '2',
    title: '可重复使用的物品',
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/reusable'
  },
  {
    id: '3',
    title: '更可持续的食物',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/food'
  },
  {
    id: '4',
    title: '共创设计',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/design',
    backgroundColor: '#00853E'
  },
  {
    id: '6',
    title: '潜海之梦',
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/dream'
  },
  {
    id: '7',
    title: '节约能源',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/energy'
  },
  {
    id: '8',
    title: '减少浪费',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/waste'
  },
  {
    id: '9',
    title: '节约水源',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/water'
  },
  {
    id: '10',
    title: '延长家具寿命',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=1000&q=80',
    link: '/sustainable/furniture'
  }
];

export default function SustainableTips() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = tipItems.length;
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
        <h2 className="text-2xl font-bold mb-6">打造更可持续的家的技巧和创意</h2>
        
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
                width: `${(244 + 16) * tipItems.length - 16}px`
              }}
            >
              {tipItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`relative w-[244px] aspect-[4/5] group overflow-hidden flex-none ${
                    item.isMain ? 'bg-[#00853E]' : ''
                  }`}
                >
                  {item.isMain ? (
                    <div className="h-full flex flex-col items-start justify-between p-8 text-white">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <div className="flex items-center text-base font-medium">
                        查看更多
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="244px"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center justify-center h-[40px] px-4 bg-white rounded-full text-black text-base font-medium shadow-lg whitespace-nowrap">
                          {item.title}
                        </span>
                      </div>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* 底部指示器 */}
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