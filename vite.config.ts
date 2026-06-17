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
            manifestFilename: 'manifest.webmanifest',
            includeAssets: [
                'favicon.svg',
                'favicon.ico',
                'pwa-192x192.png',
                'pwa-512x512.png',
                'maskable-icon-512x512.png',
                'apple-touch-icon-180x180.png',
                'screenshots/mobile.png',
                'screenshots/desktop.png',
            ],
            manifest: {
                id: '/',
                lang: 'en',
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
                        src: '/pwa-64x64.png',
                        sizes: '64x64',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/maskable-icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
                categories: ['food', 'lifestyle'],
                screenshots: [
                    {
                        src: '/screenshots/mobile.png',
                        sizes: '390x844',
                        type: 'image/png',
                        form_factor: 'narrow',
                    },
                    {
                        src: '/screenshots/desktop.png',
                        sizes: '1280x720',
                        type: 'image/png',
                        form_factor: 'wide',
                    },
                ],
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
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        },
    },
})
