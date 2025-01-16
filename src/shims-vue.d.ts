declare module '*.vue' {
  import { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}
// 在一个 .d.ts 文件中
interface ImportMeta {
  env: Record<string, string>;
}

declare module 'store';