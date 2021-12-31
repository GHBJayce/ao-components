import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from "rollup-plugin-external-globals"
const env = loadEnv('development', process.cwd())
const path = require('path')

export default defineConfig({
  root: './example',
  server: {
    host: env.VITE_HOST,
  },
  plugins: [
    vue(),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist/'),
    lib: {
      entry: path.resolve(__dirname, 'packages/components/index.js'),
      name: 'ao-components',
      fileName: (format) => {
        format = format === 'umd' ? 'min' : format
        return `ao-components.${format}.js`
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ant-design-vue', 'moment', 'j-weapons'],
      plugins: [
        externalGlobals({
          vue: "Vue",
          "ant-design-vue": "antd",
          moment: "moment",
          'j-weapons': 'JW',
        }),
      ],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: 'Vue',
      //     'ant-design-vue': 'antd',
      //     moment: 'moment',
      //     'j-weapons': 'JW',
      //   }
      // }
    },
  },
  // resolve: {
  //   alias: {
  //     'vue': 'https://esm.sh/vue@3.1.5',
  //     'ant-design-vue': 'https://esm.sh/ant-design-vue@2.0.0',
  //   },
  // },
})
