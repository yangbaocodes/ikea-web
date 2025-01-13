'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon, UserIcon, HeartIcon, CartIcon } from '@/components/ui/Icons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* 主导航栏 */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo/ikea-logo.svg"
                alt="IKEA"
                width={90}
                height={36}
                priority
              />
            </Link>

            {/* 搜索框 */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索商品、系列、创意灵感"
                  className="w-full h-10 pl-10 pr-4 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <SearchIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>

            {/* 右侧功能区 */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/login" 
                className="flex items-center text-sm text-gray-700 hover:text-gray-900"
              >
                <UserIcon size={20} className="mr-1" />
                <span>登录宜家账号</span>
              </Link>
              <Link 
                href="/favorites" 
                className="flex items-center text-sm text-gray-700 hover:text-gray-900"
              >
                <HeartIcon size={20} className="mr-1" />
                <span className="hidden md:inline">收藏夹</span>
              </Link>
              <Link 
                href="/cart" 
                className="flex items-center text-sm text-gray-700 hover:text-gray-900"
              >
                <CartIcon size={20} className="mr-1" />
                <span className="hidden md:inline">购物车</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 子导航栏 */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex items-center h-12 space-x-8">
            <li>
              <Link href="/products" className="text-sm text-gray-700 hover:text-gray-900">
                所有商品
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="text-sm text-gray-700 hover:text-gray-900">
                房间
              </Link>
            </li>
            <li>
              <Link href="/promotions" className="text-sm text-gray-700 hover:text-gray-900">
                活动和特惠
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-700 hover:text-gray-900">
                设计和服务
              </Link>
            </li>
            <li>
              <Link href="/inspiration" className="text-sm text-gray-700 hover:text-gray-900">
                家居灵感
              </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className="text-sm text-gray-700 hover:text-gray-900">
                新品
              </Link>
            </li>
            <li>
              <Link href="/business" className="text-sm text-gray-700 hover:text-gray-900">
                对公业务
              </Link>
            </li>
            <li>
              <Link href="/app" className="text-sm text-gray-700 hover:text-gray-900">
                下载APP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 