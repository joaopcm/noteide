import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'build @snipshare/code-block',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true,
})
