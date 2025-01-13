'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const menuItems = [
  { label: '所有商品', href: '/products' },
  { label: '房间', href: '/rooms' },
  { label: '活动和特惠', href: '/promotions' },
  { label: '设计和服务', href: '/services' },
  { label: '家居灵感', href: '/inspiration' },
  { label: '新品', href: '/new-arrivals' },
  { label: '对公业务', href: '/business' },
  { label: '下载APP', href: '/app' },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex items-center h-12 space-x-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-medium hover:text-blue-600 transition-colors relative py-4',
                  {
                    'text-blue-600': activeItem === item.href,
                    'text-gray-700': activeItem !== item.href,
                  }
                )}
                onMouseEnter={() => setActiveItem(item.href)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {item.label}
                {activeItem === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 