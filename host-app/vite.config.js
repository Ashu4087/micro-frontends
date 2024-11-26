import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'hostApp',
      remotes: {
        remoteApp: 'http://localhost:5001/assets/remoteEntry.js', // URL of the remote app
      },
      shared: ['svelte'], // Share Svelte runtime
    }),
  ],
  server:{
    port: 5174,
    cors:true,
  },
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
