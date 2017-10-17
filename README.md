# 饿了么个人项目

> 基于 vue 2.0+ 开发，用webpack打包

## 项目结构[src]

``` bash

├── api                      # 接口相关
├── common                   # 公共资源
│   └── fonts                # 字体库
│   └── js                   # utils帮助函数库
│   └── stylus               # css样式单元
├── components               # 全部组件
│   └── cartcontrol          # 数量控制组件
│   └── goods                # 商品组件
│   └── header               # 头部组件
│   └── ratings              # 商品评论
│   └── seller               # 商家信息
│   └── shopcart             # 购物车
│   └── star                 # 评论星星组件
│   └── app.vue              # 主入口
├── static                   # 相关资源
│   └── css                  # 格式化样式

```

## 技术栈:
> * vue ^2.2.1
> * vue-router ^2.2.0
> * axios ^0.16.2
> * scss ^4.5.0
> * md5 ^2.2.1
> * better-scroll ^0.1.7
> * eslint ^3.7.1

## 关键命令

``` bash
# 加载模块
npm install

# 运行测试环境，已配置热更新
npm run dev

# 打包用于生产环境
npm run build

# 打包生产并查看软件包分析器报告
npm run build --report

# 运行单元测试
npm run unit

# 运行e2e测试
npm run e2e

# 运行所有测试
npm test
```