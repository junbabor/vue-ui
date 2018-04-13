# Loong UI

`Loong UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上

## 安装

- yarn

```bash
yarn add loong-ui
```

- npm 

```bash
npm install loong-ui --save
```

## 使用

```js
import LoongUI from 'loong-ui' // 引入组件库
import 'loong-ui/lib/theme-default/lib/index.css' // 引入样式库

Vue.use(LoongUI)
```