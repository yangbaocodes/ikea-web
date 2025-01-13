'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon, UserIcon, HeartIcon, CartIcon } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        {/* 顶部 Header */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/ikea-logo.svg"
              alt="IKEA"
              width={90}
              height={36}
              className="cursor-pointer"
              priority
            />
          </Link>

          {/* 搜索框 */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索商品、系列、创意灵感"
                className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 text-sm"
              />
              <SearchIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* 右侧按钮组 */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 hover:bg-transparent"
              icon={<UserIcon size={20} className="text-gray-700" />}
            >
              <span className="hidden md:inline text-sm text-gray-700">登录宜家账号</span>
            </Button>
            <Button
              variant="ghost"
              className="p-2 hover:bg-transparent"
              icon={<HeartIcon size={20} className="text-gray-700" />}
              aria-label="收藏"
            />
            <Button
              variant="ghost"
              className="p-2 hover:bg-transparent"
              icon={<CartIcon size={20} className="text-gray-700" />}
              aria-label="购物车"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 