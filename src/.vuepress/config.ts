import { defineUserConfig } from "vuepress";

import { gitPlugin } from '@vuepress/plugin-git'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins: [
    gitPlugin({
      // 配置项
      updatedTime:false
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});




