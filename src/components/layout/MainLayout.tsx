'use client';

import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">IKEA</div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">登录</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              注册
            </button>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <ul className="space-y-2">
                <li>公司简介</li>
                <li>联系方式</li>
                <li>加入我们</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">客户服务</h3>
              <ul className="space-y-2">
                <li>购物指南</li>
                <li>配送服务</li>
                <li>退换货政策</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <ul className="space-y-2">
                <li>微信</li>
                <li>微博</li>
                <li>抖音</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 IKEA Web. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 