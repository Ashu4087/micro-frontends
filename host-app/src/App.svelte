<!-- <script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } 
</style> -->


<!-- <script>
  import { Button } from 'remoteApp/Button';
</script>

<h1>Host App</h1>
<Button /> -->

<!-- <script>
  import { onMount } from 'svelte';
  
  let Button = null;
  
  onMount(async () => {
    const module = await import('remoteApp/Button');
    Button = module.default;
  });
</script> -->

<!-- <script>
  import { onMount } from 'svelte';
  let Button = null;

  onMount(async () => {
    const remoteName = 'remoteApp';
    const remoteUrl = 'http://localhost:5173/assets/remoteEntry.js';

    try {
      const container = await loadRemote(remoteName, remoteUrl);
      const factory = await container.get('./Button'); // Match the exposed module
      Button = factory().default;
    } catch (error) {
      console.error('Error loading remote:', error);
    }
  });
</script>

<h1>Host App</h1>
{#if Button}
  <Button label="Remote Button" />
{:else}
  <p>Loading remote...</p>
{/if} -->

<script>
  import DynamicAppPage from './pages/DynamicAppPage.svelte';
</script>

<main>
  <h1>Host Application</h1>
  <DynamicAppPage />
</main>