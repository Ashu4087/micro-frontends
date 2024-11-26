import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.svelte', // Expose your components
      },
      shared: ['svelte'], // Share Svelte runtime
    }),
  ],
  server:{
    port: 5001,
    cors:true
  },
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
