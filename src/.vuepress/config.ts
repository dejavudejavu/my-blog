import { defineUserConfig } from "vuepress";

import { gitPlugin } from '@vuepress/plugin-git'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "美梦诚臻美术考研",
  // description: "美梦诚臻美术考研",

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




