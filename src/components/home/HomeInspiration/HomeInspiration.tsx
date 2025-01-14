'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ProductSpot {
  id: string;
  x: number;
  y: number;
  name: string;
  price: number;
  originalPrice?: number;
  memberPrice?: number;
  isNew?: boolean;
}

interface InspirationItem {
  id: string;
  image: string;
  spots: ProductSpot[];
}

interface TabContent {
  id: string;
  name: string;
  items: InspirationItem[];
}

const tabs: TabContent[] = [
  {
    id: 'all',
    name: '全部',
    items: [
      {
        id: '1',
        image: '/images/inspiration/inspiration-vappeby.jpg',
        spots: [
          {
            id: 'spot1',
            x: 30,
            y: 40,
            name: 'VAPPEBY 瓦波比',
            price: 299.00,
            isNew: true
          }
        ]
      },
      {
        id: '2',
        image: '/images/inspiration/inspiration-raskoeg.jpg',
        spots: [
          {
            id: 'spot2',
            x: 30,
            y: 40,
            name: 'RASKOEG 拉斯克格',
            price: 318.99,
            isNew: true
          }
        ]
      }
    ]
  },
  {
    id: 'bedroom',
    name: '卧室',
    items: [
      {
        id: 'bedroom1',
        image: '/images/inspiration/inspiration-brimnes.jpg',
        spots: [
          {
            id: 'spot3',
            x: 50,
            y: 50,
            name: 'BRIMNES 布里姆内斯',
            price: 599,
            isNew: true
          }
        ]
      }
    ]
  },
  {
    id: 'kitchen',
    name: '厨房',
    items: [
      {
        id: 'kitchen1',
        image: '/images/inspiration/inspiration-korken.jpg',
        spots: [
          {
            id: 'spot4',
            x: 30,
            y: 30,
            name: 'KORKEN 考肯',
            price: 9.99
          }
        ]
      }
    ]
  },
  {
    id: 'childroom',
    name: '儿童房',
    items: [
      {
        id: 'child1',
        image: '/images/inspiration/inspiration-trofast.jpg',
        spots: [
          {
            id: 'spot8',
            x: 50,
            y: 50,
            name: 'TROFAST 特洛法斯特',
            price: 499,
            isNew: true
          }
        ]
      },
      {
        id: 'child2',
        image: '/images/inspiration/inspiration-sundvik.jpg',
        spots: [
          {
            id: 'spot9',
            x: 50,
            y: 50,
            name: 'SUNDVIK 桑维克',
            price: 1299
          }
        ]
      }
    ]
  },
  {
    id: 'outdoor',
    name: '户外',
    items: [
      {
        id: 'outdoor1',
        image: '/images/inspiration/inspiration-applaro.jpg',
        spots: [
          {
            id: 'spot10',
            x: 50,
            y: 50,
            name: 'ÄPPLARÖ 阿普莱露',
            price: 1999,
            originalPrice: 2499
          }
        ]
      }
    ]
  },
  {
    id: 'door',
    name: '门厅',
    items: [
      {
        id: 'door1',
        image: '/images/inspiration/inspiration-hemnes.jpg',
        spots: [
          {
            id: 'spot11',
            x: 50,
            y: 50,
            name: 'HEMNES 汉尼斯',
            price: 899
          }
        ]
      }
    ]
  },
  {
    id: 'balcony',
    name: '阳台',
    items: [
      {
        id: 'balcony1',
        image: '/images/inspiration/inspiration-askholmen.jpg',
        spots: [
          {
            id: 'spot12',
            x: 50,
            y: 50,
            name: 'ASKHOLMEN 阿霍蒙',
            price: 299
          }
        ]
      }
    ]
  },
  {
    id: 'office',
    name: '办公',
    items: [
      {
        id: 'office1',
        image: '/images/inspiration/inspiration-markus.jpg',
        spots: [
          {
            id: 'spot13',
            x: 50,
            y: 50,
            name: 'MARKUS 马库斯',
            price: 999,
            isNew: true
          }
        ]
      }
    ]
  },
  {
    id: 'dining',
    name: '餐厅',
    items: [
      {
        id: 'dining1',
        image: '/images/inspiration/inspiration-ekedalen.jpg',
        spots: [
          {
            id: 'spot14',
            x: 50,
            y: 50,
            name: 'EKEDALEN 伊克多兰',
            price: 1499
          }
        ]
      }
    ]
  },
  {
    id: 'electric',
    name: '电器',
    items: [
      {
        id: 'electric1',
        image: '/images/inspiration/inspiration-tillreda.jpg',
        spots: [
          {
            id: 'spot15',
            x: 50,
            y: 50,
            name: 'TILLREDA 提瑞达',
            price: 399,
            isNew: true
          }
        ]
      }
    ]
  }
];

const HomeInspiration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSpot, setHoveredSpot] = useState<string | null>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const tabsRef = useRef<HTMLDivElement>(null);

  // 检查是否需要显示滚动按钮
  const checkScrollButtons = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      // 只有当内容宽度超过1280px时才显示滚动按钮
      const shouldShowButtons = scrollWidth > 1280;
      setShowLeftScroll(shouldShowButtons && scrollLeft > 0);
      setShowRightScroll(shouldShowButtons && scrollLeft < scrollWidth - clientWidth);
    }
  };

  // 组件挂载和tab变化时检查滚动按钮
  useEffect(() => {
    checkScrollButtons();
  }, []);

  // 处理滚动
  const handleScroll = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? tabsRef.current.scrollLeft - scrollAmount 
        : tabsRef.current.scrollLeft + scrollAmount;
      
      tabsRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // 延迟检查滚动按钮状态
      setTimeout(checkScrollButtons, 300);
    }
  };

  // 获取当前要显示的items
  const getDisplayItems = (): InspirationItem[] => {
    if (activeTab === 'all') {
      // 合并所有tab的items
      return tabs.slice(1).reduce<InspirationItem[]>((allItems, tab) => {
        return [...allItems, ...tab.items];
      }, []);
    }
    return tabs.find(tab => tab.id === activeTab)?.items || [];
  };

  return (
    <section className="w-[1280px] mx-auto my-20">
      <h2 className="text-[24px] font-bold mb-6">发现更多家居灵感</h2>

      {/* Tab Bar Container */}
      <div className="relative mb-8">
        {/* Left Scroll Button */}
        {showLeftScroll && (
          <button 
            onClick={() => handleScroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        )}

        {/* Tabs */}
        <div 
          ref={tabsRef}
          className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
          onScroll={checkScrollButtons}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full text-[14px] transition-colors flex-shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#111] text-white'
                  : 'border border-[#111] text-[#111] hover:bg-[#111] hover:text-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        {showRightScroll && (
          <button 
            onClick={() => handleScroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* 瀑布流布局 */}
      <div className="columns-3 gap-6">
        {getDisplayItems().map((item: InspirationItem) => (
          <div key={item.id} className="relative mb-6 group">
            <div className="relative">
              <Image
                src={item.image}
                alt="Inspiration"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* 悬浮圆点 */}
              {item.spots.map((spot: ProductSpot) => (
                <button
                  key={spot.id}
                  className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onMouseEnter={() => setHoveredSpot(spot.id)}
                  onMouseLeave={() => setHoveredSpot(null)}
                >
                  <div className="w-2 h-2 bg-black rounded-full" />
                </button>
              ))}
              {/* 产品信息卡片 */}
              {item.spots.map((spot: ProductSpot) => (
                hoveredSpot === spot.id && (
                  <div
                    key={`info-${spot.id}`}
                    className="absolute z-10 bg-white p-4 rounded shadow-lg"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -120%)' }}
                  >
                    <div className="flex items-start space-x-2">
                      <div>
                        {spot.isNew && (
                          <span className="inline-block bg-[#0058a3] text-white text-xs px-2 py-0.5 mb-1">
                            会员价
                          </span>
                        )}
                        <h3 className="font-bold text-[14px]">{spot.name}</h3>
                        <div className="mt-1">
                          <span className="text-[16px] font-bold">¥{spot.price}</span>
                          {spot.originalPrice && (
                            <span className="text-[14px] text-gray-500 line-through ml-2">
                              ¥{spot.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-[14px] text-[#111] border border-[#111] rounded-full px-6 py-3 hover:bg-[#111] hover:text-white transition-colors duration-300">
          加载更多内容
        </button>
      </div>
    </section>
  );
};

export default HomeInspiration; 