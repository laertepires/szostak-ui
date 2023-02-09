import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import { rollup } from 'rollup'
import gzipPlugin from 'rollup-plugin-gzip'
import { promisify } from 'util'
import { brotliCompress } from 'zlib'

import * as packageJson from './package.json'

const brotliPromise = promisify(brotliCompress)

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    // GZIP compression as .gz files
    gzipPlugin(),
    // Brotil compression as .br files
    gzipPlugin({
      customCompression: (content) => brotliPromise(Buffer.from(content)),
      fileName: '.br',
    }),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: {
        module: 'src/components/index.ts',
        button: 'src/components/Button/index.ts',
      },
      name: 'szostak-ui',
      formats: ['es', 'cjs'],
      fileName: (format, name) => `components/${name}/szostak-ui-${name}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
