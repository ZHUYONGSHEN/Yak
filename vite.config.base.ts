import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export const base = {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ], // 需要用到的插件数组
  publicDir: "public", // 静态资源服务的文件夹
  //   cacheDir: "node_modules/.vite", // 存储缓存文件的目录
  base: "./", // 开发或生产环境服务的公共基础路径 配置引入相对路径
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
    dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本
    conditions: [], // 解决程序包中 情景导出 时的其他允许条件
    // mainFields: [], // 解析包入口点尝试的字段列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"], // 导入时想要忽略的扩展名列表
    preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径确定文件身份
  },
  json: {
    namedExports: true, // 是否支持从.json文件中进行按名导入
    stringify: false, //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
  },
  server: {
    // host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
    port: 6001, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    open: true, // 启动时自动在浏览器中打开应用程序
    cors: true, // 配置 CORS
    force: true, // 强制使依赖预构建
  },
  hmr: {
    // 禁用或配置 HMR 连接
    // ...
  },
  watch: {
    // 传递给 chokidar 的文件系统监听器选项
    // ...
  },
  fs: {
    strict: true, // 限制为工作区 root 路径以外的文件的访问
    allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
    deny: [".env", ".env.*", "*.{pem,crt}"], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
  },
};
