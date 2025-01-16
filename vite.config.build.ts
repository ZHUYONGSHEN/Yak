// const packageName = require('./package.json').name;
import { name as appName } from "./package.json";

export const build = {
  target: ["modules"], // 设置最终构建的浏览器兼容目标
  polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
  outDir: "dist", // 指定输出路径
  assetsDir: "assets", // 指定生成静态文件目录
  assetsInlineLimit: "4096", // 小于此阈值的导入或引用资源将内联为 base64 编码
  cssCodeSplit: true, // 启用 CSS 代码拆分
  cssTarget: "", // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
  sourcemap: true, // 构建后是否生成 source map 文件
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ["vue", "element-plus"],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: "Vue",
        "element-plus": "element-plus",
      },
    },
  }, // 自定义底层的 Rollup 打包配置
  lib: {
    entry: "src/packages/index.ts", // 设置入口文件
    name: appName, // 起个名字，安装、引入用
    //formats: ["umd"], // 打包格式
    fileName: (format: string) => {
      return `${appName}.${format}.js`;
    }, // 打包后的文件名
  }, // 构建为库
  manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
  ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
  ssr: undefined, // 生成面向 SSR 的构建
  minify: "esbuild", // 指定使用哪种混淆器
  terserOptions: {}, // 传递给 Terser 的更多 minify 选项
  write: true, // 启用将构建后的文件写入磁盘
  emptyOutDir: true, // 构建时清空该目录
  brotliSize: true, // 启用 brotli 压缩大小报告
  chunkSizeWarningLimit: 500, // chunk 大小警告的限制
  watch: null, // 设置为 {} 则会启用 rollup 的监听器
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
