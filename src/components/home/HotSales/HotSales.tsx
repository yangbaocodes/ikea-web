'use client';

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const hotSalesCategories = [
  {
    id: 1,
    title: '热销榜-抽屉柜',
    items: [
      { id: 1, name: 'ALEX 阿来斯', price: '599', image: '/drawer1.jpg' },
      { id: 2, name: 'MALM 马尔姆', price: '799', image: '/drawer2.jpg' },
      { id: 3, name: 'HEMNES 汉尼斯', price: '999', image: '/drawer3.jpg' }
    ]
  },
  {
    id: 2,
    title: '热销榜-装饰画',
    items: [
      { id: 1, name: 'PJÄTTERYD 耶特瑞德', price: '199', image: '/art1.jpg' },
      { id: 2, name: 'BJÖRKSTA 约克斯塔', price: '299', image: '/art2.jpg' },
      { id: 3, name: 'GRÖNBY 格伦比', price: '399', image: '/art3.jpg' }
    ]
  },
  {
    id: 3,
    title: '热销榜-晾衣架',
    items: [
      { id: 1, name: 'MULIG 穆利格', price: '79', image: '/rack1.jpg' },
      { id: 2, name: 'RIGGA 瑞加', price: '99', image: '/rack2.jpg' },
      { id: 3, name: 'FROST 弗罗斯特', price: '129', image: '/rack3.jpg' }
    ]
  }
]

export default function HotSales() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === 'right' && currentIndex < hotSalesCategories.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const showLeftButton = currentIndex > 0
  const showRightButton = currentIndex < hotSalesCategories.length - 1

  return (
    <div
      className="relative py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">热销榜</h2>
        <div className="flex transition-transform duration-300" 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {hotSalesCategories.map((category) => (
            <div
              key={category.id}
              className="flex-none w-full"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="flex-none w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-red-600">¥{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className={`absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className={`absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {hotSalesCategories.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 