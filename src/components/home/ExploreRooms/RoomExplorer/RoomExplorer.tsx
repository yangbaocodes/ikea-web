'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RoomItem {
  id: string;
  name: string;
  image: string;
  link: string;
}

const roomItems: RoomItem[] = [
  {
    id: '1',
    name: '卧室',
    image: '/images/rooms/bedroom.jpg',
    link: '/rooms/bedroom'
  },
  {
    id: '2',
    name: '客厅',
    image: '/images/rooms/living-room.jpg',
    link: '/rooms/living-room'
  },
  {
    id: '3',
    name: '厨房',
    image: '/images/rooms/kitchen.jpg',
    link: '/rooms/kitchen'
  },
  {
    id: '4',
    name: '餐厅',
    image: '/images/rooms/dining-room.jpg',
    link: '/rooms/dining-room'
  },
  {
    id: '5',
    name: '儿童',
    image: '/images/rooms/children.jpg',
    link: '/rooms/children'
  }
];

export default function RoomExplorer() {
  return (
    <section className="py-12 bg-white">
      <div className="w-[1280px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">从房间开始探索</h2>
        
        {/* 卡片容器 */}
        <div className="grid grid-cols-5 gap-4">
          {roomItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="relative aspect-[4/5] group overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1280px) 240px, 240px"
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

        {/* 分隔线 */}
        <div className="mt-12 border-t border-gray-200" />
      </div>
    </section>
  );
} 