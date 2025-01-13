'use client';

import React from 'react';
import Carousel from '@/components/ui/Carousel';

const bannerItems = [
  {
    id: '1',
    title: '新年特惠',
    description: '精选商品低至5折',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&h=600&q=80',
    link: '/promotions/new-year',
  },
  {
    id: '2',
    title: '卧室焕新',
    description: '打造温馨睡眠空间',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&h=600&q=80',
    link: '/rooms/bedroom',
  },
  {
    id: '3',
    title: '厨房改造',
    description: '让烹饪更有趣',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1920&h=600&q=80',
    link: '/rooms/kitchen',
  },
];

export default function Banner() {
  return (
    <section className="w-full">
      <Carousel
        items={bannerItems}
        autoPlay={true}
        interval={5000}
        showControls={true}
        showIndicators={true}
      />
    </section>
  );
} 