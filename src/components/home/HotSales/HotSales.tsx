'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';

interface HotSaleItem {
  id: string;
  title: string;
  items: {
    id: string;
    name: string;
    price: number;
    image: string;
    link: string;
  }[];
  backgroundColor: string;
  link: string;
}

const hotSaleItems: HotSaleItem[] = [
  {
    id: '1',
    title: '抽屉柜',
    backgroundColor: 'rgb(120, 113, 108)',
    link: '/hot-sales/drawer-cabinet',
    items: [
      {
        id: '1',
        name: 'MALM 马尔姆',
        price: 299.00,
        image: '/images/placeholder.jpg',
        link: '/products/malm-1'
      },
      {
        id: '2',
        name: 'MALM 马尔姆',
        price: 699.00,
        image: '/images/placeholder.jpg',
        link: '/products/malm-2'
      },
      {
        id: '3',
        name: 'KULLEN 库伦',
        price: 199.00,
        image: '/images/placeholder.jpg',
        link: '/products/kullen-1'
      }
    ]
  },
  {
    id: '2',
    title: '装饰画',
    backgroundColor: 'rgb(120, 113, 108)',
    link: '/hot-sales/wall-art',
    items: [
      {
        id: '1',
        name: 'PJÄTTERYD 耶特瑞德',
        price: 199.00,
        image: '/images/placeholder.jpg',
        link: '/products/pjatteryd-1'
      },
      {
        id: '2',
        name: 'BJÖRKSTA 约克斯塔',
        price: 299.00,
        image: '/images/placeholder.jpg',
        link: '/products/bjorksta-1'
      },
      {
        id: '3',
        name: 'GRÖNBY 格伦比',
        price: 399.00,
        image: '/images/placeholder.jpg',
        link: '/products/gronby-1'
      }
    ]
  },
  {
    id: '3',
    title: '晾衣架',
    backgroundColor: 'rgb(120, 113, 108)',
    link: '/hot-sales/clothes-rack',
    items: [
      {
        id: '1',
        name: 'MULIG 穆利格',
        price: 79.00,
        image: '/images/placeholder.jpg',
        link: '/products/mulig-1'
      },
      {
        id: '2',
        name: 'NIKKEBY 尼克比',
        price: 199.00,
        image: '/images/placeholder.jpg',
        link: '/products/nikkeby-1'
      },
      {
        id: '3',
        name: 'RIGGA 瑞加',
        price: 99.00,
        image: '/images/placeholder.jpg',
        link: '/products/rigga-1'
      }
    ]
  },
  {
    id: '4',
    title: '收纳盒',
    backgroundColor: 'rgb(120, 113, 108)',
    link: '/hot-sales/storage-box',
    items: [
      {
        id: '1',
        name: 'KUGGIS 库吉斯',
        price: 49.00,
        image: '/images/placeholder.jpg',
        link: '/products/kuggis-1'
      },
      {
        id: '2',
        name: 'SAMLA 萨姆拉',
        price: 29.00,
        image: '/images/placeholder.jpg',
        link: '/products/samla-1'
      },
      {
        id: '3',
        name: 'VARIERA 瓦瑞拉',
        price: 39.00,
        image: '/images/placeholder.jpg',
        link: '/products/variera-1'
      }
    ]
  }
];

export default function HotSales() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = hotSaleItems.length;
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
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 商品列表容器 */}
          <div className="w-[1232px] mx-auto overflow-hidden">
            {/* 左右切换按钮 */}
            {isHovered && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-[150px] top-[200px] z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-x-1/2"
                    aria-label="上一页"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                  </button>
                )}
                {currentIndex < maxIndex && (
                  <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-[70px] top-[200px] z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-full -translate-x-1/2"
                    aria-label="下一页"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                  </button>
                )}
              </>
            )}

            <div
              className="flex gap-[20.5px] transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (397 + 20.5)}px)`,
                width: `${(397 + 20.5) * hotSaleItems.length - 20.5}px`
              }}
            >
              {hotSaleItems.map((category) => (
                <div
                  key={category.id}
                  className="flex-none w-[397px] h-[399px] bg-white"
                >
                  {/* 标题区域 */}
                  <Link 
                    href={category.link}
                    className="block h-[120px] relative group"
                    style={{ backgroundColor: category.backgroundColor }}
                  >
                    <div className="absolute inset-0 p-6 flex items-center justify-between text-white">
                      <div>
                        <div className="text-sm mb-1">热销榜</div>
                        <div className="text-2xl font-bold">{category.title}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <span className="text-white">→</span>
                      </div>
                    </div>
                  </Link>

                  {/* 商品列表 */}
                  <div className="divide-y h-[279px] overflow-hidden">
                    {category.items.map((item, index) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="flex items-center p-4 hover:bg-gray-50 transition-colors h-[93px]"
                      >
                        {/* 排名标签 */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-4 ${
                          index === 0 ? 'bg-yellow-400 text-white' :
                          index === 1 ? 'bg-gray-300 text-gray-700' :
                          'bg-orange-400 text-white'
                        }`}>
                          {index + 1}
                        </div>

                        {/* 商品图片 */}
                        <div className="relative w-[72px] h-[72px] mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* 商品信息 */}
                        <div className="flex-1">
                          <h3 className="text-base mb-2">{item.name}</h3>
                          <div className="text-sm">
                            <span className="text-xs align-top">¥</span>
                            <span className="font-medium">{Math.floor(item.price)}</span>
                            {item.price % 1 !== 0 && (
                              <span className="text-xs">.{(item.price % 1).toFixed(2).slice(2)}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 底部指示器 */}
          {maxIndex > 0 && (
            <div className="mt-12">
              <div className="w-[1232px] mx-auto">
                <div className="w-[1232px] flex">
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