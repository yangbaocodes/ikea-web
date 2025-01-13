'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'STRÅLA 斯特洛',
    description: 'LED装饰灯, 星星图案 白色',
    price: 49.99,
    image: '/images/products/placeholder.jpg',
    link: '/products/strala-1',
  },
  {
    id: '2',
    name: 'VINTERFINT 温特芬特',
    description: '装饰品3件套, 红色',
    price: 29.99,
    image: '/images/products/placeholder.jpg',
    link: '/products/vinterfint-1',
  },
  {
    id: '3',
    name: 'VINTER 温特尔',
    description: '桌布, 红色/白色 格纹',
    price: 79.99,
    image: '/images/products/placeholder.jpg',
    link: '/products/vinter-1',
  },
  {
    id: '4',
    name: 'STRÅLA 斯特洛',
    description: 'LED台灯, 红色',
    price: 99.99,
    image: '/images/products/placeholder.jpg',
    link: '/products/strala-2',
  },
];

export default function NewYearAtmosphere() {
  return (
    <section className="py-12 px-4 bg-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">装点新年氛围</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            浏览并选购我们全新推出的产品！每一款产品都能契合不同房间和风格，带给你新的视觉亮点。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="text-lg font-bold text-red-600">
                  {formatPrice(product.price)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/collections/new-year"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors"
          >
            发现更多新品
          </Link>
        </div>
      </div>
    </section>
  );
} 