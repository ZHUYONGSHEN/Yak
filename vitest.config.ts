import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // node、jsdom、happy-dom
    environment: 'node',
    // 包含测试的文件glob模式
    include: ['test/__tests__/**/*.spec.ts'],
    // 排除的测试文件glob模式
    exclude: [...configDefaults.exclude, 'node_modules'],
    // 测试超时时间（毫秒）
    testTimeout: 5000,
    // 测试环境的全局变量
    globals: true,
    // 详细报告器
    reporters: ['verbose'],
    // 测试覆盖率配置
    coverage: {
      // 测试覆盖率提供者
      provider: 'v8',
      // 是否在测试结束后生成覆盖率报告
      enabled: false,
      // 覆盖率报告的类型
      reporter: ['html', 'text'],
      // 改为自己需要测试的目录
      include: ['**/*Business.{js,ts}'],
    },
  },
})