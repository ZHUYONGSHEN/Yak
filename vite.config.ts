/// <reference types="vitest" />
import { defineConfig } from "vite";
import { base } from "./vite.config.base";
import { dev } from "./vite.config.dev";
import { build } from "./vite.config.build";
import type { ConfigEnv } from "vite";

const commandSelect = {
  serve: () => ({ ...base, ...dev, plugins: [...base.plugins, ...dev.plugins] }),
  build: () => ({ ...base, ...build }),
};
export default defineConfig((configEnv: ConfigEnv) => {
  // 使用command变量示例（根据实际需求调整）
  // 其他代码逻辑
  return commandSelect[configEnv.command]();
});
