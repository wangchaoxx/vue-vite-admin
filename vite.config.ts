import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// https://github.com/posva/unplugin-vue-router
import VueRouter from 'unplugin-vue-router/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),
    VueRouter(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core'
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),

    {
      ...Vue(),
      // https://github.com/vitejs/vite-plugin-vue/issues/74
      apply: (config) => {
        return config.mode === "test";
      },
    }
  ],
})
