'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';
import { formatPrice } from '@/lib/utils';

interface HotProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

interface HotCategory {
  id: string;
  title: string;
  products: HotProduct[];
  link: string;
}

const hotCategories: HotCategory[] = [
  {
    id: '1',
    title: '热销榜-抽屉柜',
    link: '/hot-sales/drawer-cabinet',
    products: [
      {
        id: '1-1',
        name: 'MALM 马尔姆',
        description: '三斗抽屉柜, 白色',
        price: 599,
        image: '/images/products/placeholder.jpg',
        link: '/products/malm-1',
      },
      {
        id: '1-2',
        name: 'KULLEN 库伦',
        description: '三斗抽屉柜, 白色',
        price: 299,
        image: '/images/products/placeholder.jpg',
        link: '/products/kullen-1',
      },
      {
        id: '1-3',
        name: 'HEMNES 汉尼斯',
        description: '三斗抽屉柜, 白色',
        price: 999,
        image: '/images/products/placeholder.jpg',
        link: '/products/hemnes-1',
      },
    ],
  },
  {
    id: '2',
    title: '热销榜-装饰画',
    link: '/hot-sales/wall-art',
    products: [
      {
        id: '2-1',
        name: 'PJÄTTERYD 耶特瑞德',
        description: '装饰画, 城市风光',
        price: 199,
        image: '/images/products/placeholder.jpg',
        link: '/products/pjatteryd-1',
      },
      {
        id: '2-2',
        name: 'BJÖRKSTA 约克斯塔',
        description: '装饰画, 山水风景',
        price: 299,
        image: '/images/products/placeholder.jpg',
        link: '/products/bjorksta-1',
      },
      {
        id: '2-3',
        name: 'GRÖNBY 格伦比',
        description: '装饰画组合, 三件套',
        price: 399,
        image: '/images/products/placeholder.jpg',
        link: '/products/gronby-1',
      },
    ],
  },
  {
    id: '3',
    title: '热销榜-晾衣架',
    link: '/hot-sales/clothes-rack',
    products: [
      {
        id: '3-1',
        name: 'MULIG 穆利格',
        description: '晾衣架, 白色',
        price: 79,
        image: '/images/products/placeholder.jpg',
        link: '/products/mulig-1',
      },
      {
        id: '3-2',
        name: 'NIKKEBY 尼克比',
        description: '晾衣架, 灰色',
        price: 199,
        image: '/images/products/placeholder.jpg',
        link: '/products/nikkeby-1',
      },
      {
        id: '3-3',
        name: 'RIGGA 瑞加',
        description: '晾衣架, 白色',
        price: 99,
        image: '/images/products/placeholder.jpg',
        link: '/products/rigga-1',
      },
    ],
  },
];

export default function HotSales() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">热销榜</h2>
        
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 滚动按钮 */}
          {showLeftButton && isHovered && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="向左滚动"
            >
              <ChevronLeftIcon size={24} />
            </button>
          )}
          {showRightButton && isHovered && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="向右滚动"
            >
              <ChevronRightIcon size={24} />
            </button>
          )}

          {/* 热销榜列表 */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
            onScroll={handleScroll}
          >
            {hotCategories.map((category) => (
              <div
                key={category.id}
                className="flex-none w-[400px] bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <Link href={category.link} className="block">
                  <h3 className="text-lg font-bold p-4 border-b">{category.title}</h3>
                </Link>
                <div className="p-4">
                  {category.products.map((product, index) => (
                    <Link
                      key={product.id}
                      href={product.link}
                      className="flex items-center gap-4 py-3 group"
                    >
                      <div className="flex-none w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                        {index + 1}
                      </div>
                      <div className="relative w-20 h-20 flex-none overflow-hidden rounded">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1 truncate group-hover:text-blue-600">
                          {product.name}
                        </h4>
                        <p className="text-gray-500 text-sm mb-1 truncate">
                          {product.description}
                        </p>
                        <div className="text-sm font-bold">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 