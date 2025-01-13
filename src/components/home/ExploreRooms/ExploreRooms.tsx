'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const rooms = [
  {
    id: '1',
    name: '卧室',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/bedroom',
  },
  {
    id: '2',
    name: '客厅',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/living-room',
  },
  {
    id: '3',
    name: '厨房',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/kitchen',
  },
  {
    id: '4',
    name: '餐厅',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/dining',
  },
  {
    id: '5',
    name: '儿童',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/children',
  },
  {
    id: '6',
    name: '浴室',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/bathroom',
  },
  {
    id: '7',
    name: '书房和办公',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/office',
  },
  {
    id: '8',
    name: '门厅',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/hallway',
  },
  {
    id: '9',
    name: '阳台',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/balcony',
  },
  {
    id: '10',
    name: '户外',
    image: '/images/products/placeholder.jpg',
    link: '/rooms/outdoor',
  },
];

export default function ExploreRooms() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">从房间开始探索</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            选择一个房间，发现适合你的家具和装饰灵感
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={room.link}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium">
                    浏览{room.name}
                  </span>
                </div>
              </div>
              <h3 className="text-center font-medium group-hover:text-blue-600 transition-colors">
                {room.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/rooms"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            浏览房间灵感图库
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 