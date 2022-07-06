import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
    server: {
        https: {
            key: "E:/laragon/etc/ssl/laragon.key",
            cert: "E:/laragon/etc/ssl/laragon.crt",
        },
        host: "app-aseragro.siptelco.co",
        hmr: {
            host: "app-aseragro.siptelco.co",
        },
    }, 
})
