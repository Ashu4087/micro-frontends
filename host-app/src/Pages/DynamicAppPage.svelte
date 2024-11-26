<script>
    import { onMount } from 'svelte';
    import { loadMicrofrontend } from '../utils/loadRemotes';
  
    let DynamicComponent = null;
    let error = null;
  
    const microfrontendConfigs = [
      { 
        url: 'http://localhost:5001/assets/remoteEntry.js', 
        name: 'Remote App' 
      }
    ];
  
    onMount(async () => {
      try {
        console.log("Loading Dynamic component ...", DynamicComponent);

        DynamicComponent = await loadMicrofrontend(microfrontendConfigs[0]);
        console.log("Dynamic component loaded ...", DynamicComponent);
        
      } catch (e) {
        error = 'Failed to load remote app';
        console.error(e);
      }
    });
  </script>
  
  {#if error}
    <div class="error">{error}</div>
  {:else if DynamicComponent}
    <svelte:component this={DynamicComponent} />
  {:else}
    <div>Loading remote app...</div>
  {/if}