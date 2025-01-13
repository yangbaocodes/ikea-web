# IKEA Web

基于 Next.js 14 构建的现代化电商网站。

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: React Context + Hooks
- **代码规范**: ESLint + Prettier
- **包管理**: npm

## 目录结构

```
src/
├── app/                # Next.js 应用路由
├── components/         # React 组件
│   ├── ui/            # UI 基础组件
│   ├── layout/        # 布局组件
│   └── common/        # 通用业务组件
├── lib/               # 工具函数和 Hooks
│   ├── utils/         # 通用工具函数
│   └── hooks/         # 自定义 Hooks
├── styles/            # 全局样式
├── types/             # TypeScript 类型定义
├── services/          # API 服务
└── constants/         # 常量定义
```

## 开始使用

1. 克隆项目
```bash
git clone [repository-url]
cd ikea-web
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 主要功能

- [ ] 用户认证
- [ ] 商品展示
- [ ] 购物车
- [ ] 订单管理
- [ ] 个人中心

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
