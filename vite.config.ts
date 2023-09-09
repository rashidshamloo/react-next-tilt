import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.tsx'),
      name: 'react-next-tilt',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom',
        },
        exports: 'named',
      },
    },
  },
  base: '/react-next-tilt',
  plugins: [
    react(),
    dts({
      include: 'src/lib/types/types.ts',
      outDir: 'dist',
      beforeWriteFile: (filePath, content) => {
        if (!filePath.includes('types/types.d.ts')) return false;
        return {
          filePath: filePath.replace('types/types.d.ts', 'index.d.ts'),
          content:
            content +
            `export declare const Tilt: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<TiltProps & import("react").RefAttributes<TiltRef>>>;\nexport default Tilt;`,
        };
      },
    }),
  ],
});
