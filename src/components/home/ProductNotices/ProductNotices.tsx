'use client';

import React from 'react';
import Link from 'next/link';

type NoticeType = 'warning' | 'info' | 'success';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  type: NoticeType;
  link: string;
}

const notices: Notice[] = [
  {
    id: '1',
    title: '产品召回通知',
    content: '部分 HEMNES 汉尼斯 系列产品因安全问题需要召回',
    date: '2024-01-15',
    type: 'warning',
    link: '/notices/recall-hemnes',
  },
  {
    id: '2',
    title: '价格调整通知',
    content: '因原材料成本变动，部分产品价格将于2024年2月1日起调整',
    date: '2024-01-10',
    type: 'info',
    link: '/notices/price-adjustment',
  },
  {
    id: '3',
    title: '新品上市预告',
    content: '2024春季新品系列即将上市，敬请期待',
    date: '2024-01-05',
    type: 'success',
    link: '/notices/new-arrivals',
  },
];

const typeStyles: Record<NoticeType, string> = {
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
  info: 'bg-blue-50 border-blue-400 text-blue-800',
  success: 'bg-green-50 border-green-400 text-green-800',
};

export default function ProductNotices() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">产品信息及通知</h2>
          
          <div className="space-y-4">
            {notices.map((notice) => (
              <Link
                key={notice.id}
                href={notice.link}
                className={`block p-4 border-l-4 rounded-r-lg hover:shadow-md transition-shadow ${typeStyles[notice.type]}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{notice.title}</h3>
                    <p className="text-sm opacity-90">{notice.content}</p>
                  </div>
                  <time className="text-sm opacity-75">{notice.date}</time>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/notices"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              查看全部通知
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
      </div>
    </section>
  );
} 