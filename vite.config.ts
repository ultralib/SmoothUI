import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [vue(), vueJsx(), eslint()],
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'SmoothUI',
			fileName: 'index'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "@/assets/reset.scss";
					@import "@/assets/shared.scss";
					@import "@/assets/theme.scss";
				`
			}
		}
	},
	resolve: {
		alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
	}
});
