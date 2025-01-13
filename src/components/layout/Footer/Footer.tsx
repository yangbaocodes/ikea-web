'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  customerService: [
    { name: '联系我们', href: '/contact' },
    { name: '配送服务', href: '/delivery' },
    { name: '安装服务', href: '/installation' },
    { name: '退换货政策', href: '/returns' },
    { name: '价格保证', href: '/price-guarantee' },
    { name: '产品召回', href: '/recalls' },
  ],
  shopping: [
    { name: '查找商品', href: '/products' },
    { name: '购物指南', href: '/shopping-guide' },
    { name: '促销活动', href: '/promotions' },
    { name: '礼品卡', href: '/gift-cards' },
    { name: '企业采购', href: '/business' },
    { name: '宜家会员', href: '/family' },
  ],
  aboutUs: [
    { name: '公司简介', href: '/about' },
    { name: '可持续发展', href: '/sustainability' },
    { name: '新闻中心', href: '/news' },
    { name: '加入我们', href: '/careers' },
    { name: '商场信息', href: '/stores' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '使用条款', href: '/terms' },
    { name: '网站地图', href: '/sitemap' },
  ],
};

const socialMedia = [
  {
    name: '微信',
    icon: '/images/social/wechat.svg',
    href: '#',
  },
  {
    name: '微博',
    icon: '/images/social/weibo.svg',
    href: '#',
  },
  {
    name: '抖音',
    icon: '/images/social/douyin.svg',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* 主要链接区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">客户服务</h3>
            <ul className="space-y-2">
              {footerLinks.customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">购物指南</h3>
            <ul className="space-y-2">
              {footerLinks.shopping.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">关于宜家</h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">全国服务热线</p>
              <p className="text-xl font-bold">400-800-2345</p>
              <p className="text-gray-600">周一至周日 9:00-21:00</p>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Inter IKEA Systems B.V. 保留所有权利
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 