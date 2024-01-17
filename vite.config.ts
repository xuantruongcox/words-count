import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/words-count.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: [/^lit/]
        }
    }
})