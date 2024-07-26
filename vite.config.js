import {defineConfig} from 'vite'
import stencil from '@stencil/vite-plugin'

export default defineConfig({
    plugins:[stencil()],
    build: {
        outDir: 'dist'
    }
})