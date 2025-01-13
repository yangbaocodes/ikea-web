'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface ProductNotice {
  id: string;
  title: string;
  link: string;
}

const productNotices: ProductNotice[] = [
  {
    id: '1',
    title: '宜家宜布召回部分VARMFRONT 旺芙朗 移动电源',
    link: '#'
  },
  {
    id: '2',
    title: '宜家正在召回ASKSTORM 奥斯通40W USB充电器 深灰色',
    link: '#'
  },
  {
    id: '3',
    title: '由于墙壁安装配件潜在破裂风险，宜家扩大召回维修LETTAN 莱唐镜子的范围',
    link: '#'
  },
  {
    id: '4',
    title: '宜家在中国大陆市场对两款商品开展产品信息标签修改改行动，以符合全地市场对最高使用温度提示的要求',
    link: '#'
  },
  {
    id: '5',
    title: '因有造成呼吸困难的潜在风险，宜家宜布召回BLAVINGAD 布洛凡格 钓鱼游戏',
    link: '#'
  }
];

const ProductNotices: React.FC = () => {
  return (
    <section className="w-[1280px] mx-auto my-10">
      <h2 className="text-xl font-bold mb-4">产品信息及通知</h2>
      <div className="flex flex-col">
        {productNotices.map((notice) => (
          <Link 
            key={notice.id}
            href={notice.link}
            className="group flex items-center justify-between h-[24px] my-[20px]"
          >
            <span className="text-[14px] text-[#111] font-bold leading-[22px] pr-10 group-hover:underline">{notice.title}</span>
            <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductNotices; 