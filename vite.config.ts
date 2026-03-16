import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'prompt',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'React Recipes',
                short_name: 'Recipes',
                description: 'Recipe app — browse categories and meals, save favorites',
                theme_color: '#eab308',
                background_color: '#f3f4f6',
                display: 'standalone',
                start_url: '/',
                scope: '/',
                icons: [
                    {
                        src: '/favicon.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml',
                        purpose: 'any',
                    },
                    {
                        src: '/favicon.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml',
                        purpose: 'any',
                    },
                ],
                categories: ['food', 'lifestyle'],
                orientation: 'portrait',
            },
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.ts',
            injectRegister: 'auto',
            devOptions: {
                enabled: false,
            },
        }),
    ],
    build: {
        // use esbuild for minification to avoid terser renderChunk issues
        minify: 'esbuild',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@context': path.resolve(__dirname, './src/context'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        },
    },
})
