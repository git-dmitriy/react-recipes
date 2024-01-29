import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
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