'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterColumn {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: '常用链接',
    links: [
      { text: '宜家家居APP', url: '#' },
      { text: '本地商场', url: '#' },
      { text: '在线设计工具', url: '#' },
      { text: '宜家俱乐部', url: '#' },
      { text: '宜家对公业务', url: '#' },
      { text: '瑞典美食', url: '#' },
    ]
  },
  {
    title: '客户服务',
    links: [
      { text: '质量安全', url: '#' },
      { text: '客户服务', url: '#' },
      { text: '联系我们', url: '#' },
      { text: '网上商城配送范围', url: '#' },
      { text: '常见问题', url: '#' },
      { text: '退货政策', url: '#' },
      { text: '品质保证', url: '#' },
      { text: '购物指南', url: '#' },
      { text: '购物卡余额查询', url: '#' },
    ]
  },
  {
    title: '关于宜家',
    links: [
      { text: '这就是宜家', url: '#' },
      { text: '加入我们', url: '#' },
      { text: '可持续的日常生活', url: '#' },
      { text: '气候与环境', url: '#' },
      { text: '社区参与', url: '#' },
      { text: '廉洁生活', url: '#' },
      { text: '意见反馈', url: '#' },
    ]
  },
  {
    title: '宜家新闻',
    links: [
      { text: '新闻室', url: '#' },
      { text: '新闻联络', url: '#' },
      { text: '商品召回', url: '#' },
      { text: '年年回家！', url: '#' },
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f5] box-border text-center w-full antialiased">
      <div className="w-[1280px] mx-auto pt-16 pb-8">
        <div className="grid grid-cols-5 gap-8 text-left">
          {/* 加入宜家俱乐部 */}
          <div className="col-span-1">
            <h3 className="text-[#111] text-[18px] font-bold mb-4">加入宜家俱乐部</h3>
            <p className="text-[#484848] text-[14px] leading-[22px] mb-4">
              加入会员，享受会员折扣、更多个性化家居灵感，让你的购物法则进阶到家
              <Link href="#" className="text-[#111] hover:underline ml-1">
                查看更多
              </Link>
            </p>
            <Link
              href="#"
              className="inline-block bg-[#111] text-white text-[14px] leading-[22px] px-6 py-[10px] rounded-full hover:bg-[#333]"
            >
              立即加入宜家家居
            </Link>

            <div className="mt-12">
              <h3 className="text-[#111] text-[18px] font-bold mb-4">加入宜家企业会员</h3>
              <p className="text-[#484848] text-[14px] leading-[22px] mb-4">
                加入企业会员，享受会员6大权益以及专属折扣，助力中小微企业共同成长。
                <Link href="#" className="text-[#111] hover:underline ml-1">
                  查看更多
                </Link>
              </p>
              <Link
                href="#"
                className="inline-block bg-[#111] text-white text-[14px] leading-[22px] px-6 py-[10px] rounded-full hover:bg-[#333]"
              >
                立即加入宜家家居
              </Link>
            </div>
          </div>

          {/* 其他栏目 */}
          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-[#111] text-[18px] font-bold mb-4">{column.title}</h3>
              <ul className="space-y-[10px]">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.url}
                      className="text-[14px] leading-[22px] text-[#484848] hover:text-[#111] hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 社交媒体和语言选择 */}
        <div className="flex items-center justify-start mt-12 mb-4 space-x-6 w-[1280px]">
          <Link href="#" className="hover:opacity-80">
            <Image src="/images/footerImages/weChat.svg" alt="WeChat" width={24} height={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image src="/images/footerImages/sina.svg" alt="Weibo" width={24} height={24} />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Image src="/images/footerImages/xiaohongshu.svg" alt="Xiaohongshu" width={24} height={24} />
          </Link>
          <div>
            <select className="text-[14px] leading-[22px] text-[#484848] border border-[#929292] rounded px-2 py-1 focus:outline-none focus:border-[#111]">
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* 版权信息 - 独立于主容器，实现全宽度背景 */}
      <div className="bg-[#fafafa] py-2">
        <div className="w-[1280px] mx-auto flex items-center justify-between text-[12px] leading-[18px] text-[#484848]">
          <span>© Inter IKEA Systems B.V. 1999-2025</span>
          <div className="flex items-center space-x-2">
            <Link href="#" className="hover:underline">隐私政策</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">缺陷披露政策</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">使用条款</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">上海工商</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">沪公网安备 31010402001069号</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">沪ICP 备17055232 号</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Cookies设置</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 