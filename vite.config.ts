import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { visualizer } from 'rollup-plugin-visualizer';
import lessToJS from 'less-vars-to-js';
import viteSentry from 'vite-plugin-sentry';
import viteAntdDayjs from 'vite-plugin-antd-dayjs';

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/configs/theme/index.less'),
    'utf8',
  ),
);

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      viteAntdDayjs(),
      viteSentry({
        url: process.env.SENTRY_URL,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        release: '1.0',
        deploy: {
          env: 'staging',
        },
        setCommits: {
          auto: true,
        },
        sourceMaps: {
          include: ['./build/assets'],
          ignore: ['node_modules'],
          urlPrefix: '~/assets',
        },
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: name => {
              if (name === 'col' || name === 'row') {
                return 'antd/lib/style/index.less';
              }
              return `antd/es/${name}/style/index.less`;
            },
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: './runtimeConfig',
          replacement: './runtimeConfig.browser',
        },
        {
          find: /^#/,
          replacement: path.resolve(__dirname, 'src'),
        },
        { find: /^~/, replacement: '' },
      ],
    },
    optimizeDeps: {
      include: ['@ant-design/icons', '@ant-design/icons'],
    },
    build: {
      sourcemap: false,
      outDir: 'build',
      terserOptions: {
        format: {
          comments: false,
        },
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },
      rollupOptions: {
        plugins: [visualizer()],
      },
    },
  });
};
