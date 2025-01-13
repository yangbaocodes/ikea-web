'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const inspirations = [
  {
    id: '1',
    title: '小空间大智慧',
    description: '探索如何让小空间发挥最大功效',
    image: '/images/products/placeholder.jpg',
    link: '/inspirations/small-space',
  },
  {
    id: '2',
    title: '舒适工作空间',
    description: '打造高效的居家办公环境',
    image: '/images/products/placeholder.jpg',
    link: '/inspirations/home-office',
  },
  {
    id: '3',
    title: '温馨卧室布置',
    description: '创造宁静放松的睡眠空间',
    image: '/images/products/placeholder.jpg',
    link: '/inspirations/bedroom',
  },
  {
    id: '4',
    title: '厨房收纳方案',
    description: '让烹饪更加轻松愉快',
    image: '/images/products/placeholder.jpg',
    link: '/inspirations/kitchen',
  },
];

const articles = [
  {
    id: '1',
    title: '10个卧室收纳技巧',
    image: 'https://www.ikea.cn/cn/zh/images/products/pax-pa-ke-si-yi-gui-zu-he-bai-se__0667545_pe713982_s5.jpg?f=xl',
    link: '/articles/bedroom-storage',
  },
  {
    id: '2',
    title: '厨房改造指南',
    image: 'https://www.ikea.cn/cn/zh/images/products/metod-mei-tuo-chu-fang-zu-he-bai-se__1039491_pe840243_s5.jpg?f=xl',
    link: '/articles/kitchen-renovation',
  },
  {
    id: '3',
    title: '客厅布置攻略',
    image: 'https://www.ikea.cn/cn/zh/images/products/soederhamn-suo-de-han-mu-san-zuo-sha-fa-with-chaise-longue-gransel-bai-se__1039493_pe840245_s5.jpg?f=xl',
    link: '/articles/living-room-guide',
  },
  {
    id: '4',
    title: '儿童房创意设计',
    image: 'https://www.ikea.cn/cn/zh/images/products/stuva-si-tu-wa-er-tong-chuang-dai-chou-ti-bai-se__0642437_pe701240_s5.jpg?f=xl',
    link: '/articles/kids-room',
  },
];

export default function HomeInspiration() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">发现更多家居灵感</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索我们精心策划的家居创意和解决方案，让你的家更美好
          </p>
        </div>

        {/* 主要灵感区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {inspirations.map((inspiration) => (
            <Link
              key={inspiration.id}
              href={inspiration.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={inspiration.image}
                  alt={inspiration.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {inspiration.title}
                </h3>
                <p className="text-gray-600">
                  {inspiration.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  了解更多
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 文章推荐区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ideas"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            浏览更多灵感
          </Link>
        </div>
      </div>
    </section>
  );
} 