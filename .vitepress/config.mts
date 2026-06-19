import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Copicseal 官网 | 可图匠 | 快速给图片加边框水印",
  description: "Copicseal 可图匠是一个给图片加边框水印的工具，支持读取 EXIF 信息，用户可自定义水印样式和位置，快速为照片添加快门、ISO 等相机参数。",
  head: [
    ['meta', { name: 'keywords', content: 'Copicseal, Copicseal官网, Copicseal官方下载, Copicseal下载, 可图匠, 水印相机, 图片加水印, 图片加水印工具, 图片加logo, 图片加logo工具, 图片加ISO, 图片加相机参数, 图片加EXIF信息, EXIF水印生成器,相机水印,照片水印,EXIF数据,相机信息水印,摄影水印,佳能水印,尼康水印,索尼水印,iPhone水印,水印边框,在线拼图,日历,日历制作,宫格拼图,自由拼图,拼图水印水印边框,calendar maker,watermark border,photo calendar,custom calendar,calendar design,photo watermark' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-RlVu25zR0J' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-YY005T1JZX' }],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YY005T1JZX');`
    ],
    // 51 la 统计
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, 'LA.init({id:"3O0fqwpgspapuYdo",ck:"3O0fqwpgspapuYdo"})'],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Copicseal 可图匠',
    logo: { src: '/logo.svg', alt: 'Logo' },
    lastUpdated: {},
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '模板示例', link: '/template-examples' },
      { text: '常见问题', link: '/faq' },
      { text: '社区交流', link: '/community' },
      { text: '赞助我们', link: '/sponsor' },
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '下载', link: '/download' },
          { text: '模板示例', link: '/template-examples' },
          { text: '常见问题', link: '/faq' },
          { text: '社区交流', link: '/community' },
          { text: '赞助我们', link: '/sponsor' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/copicseal/copicseal' }
    ],

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2025-2026 Kohai'
    }
  },
  sitemap: {
    hostname: 'https://copicseal.com'
  }
})
