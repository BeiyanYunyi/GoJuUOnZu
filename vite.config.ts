import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({ targets: ['ie >= 8'], additionalLegacyPolyfills: ['regenerator-runtime/runtime'] }),
    VitePWA({
      includeAssets: ['**/*.png', '**/*.woff2'],
      registerType: 'autoUpdate',
    }),
  ],
});
