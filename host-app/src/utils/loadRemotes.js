// export async function loadRemote(remoteName, remoteUrl) {
//     // Dynamically load the remoteEntry.js script
//     if (!window[remoteName]) {
//       await new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = remoteUrl;
//         script.type = 'module';
//         script.onload = resolve;
//         script.onerror = () => reject(new Error(`Failed to load remote: ${remoteName}`));
//         document.head.appendChild(script);
//       });
//     }
  
//     // Wait until the remote container is available
//     if (!window[remoteName]) {
//       throw new Error(`${remoteName} not found on window after script load.`);
//     }
  
//     const container = window[remoteName];
  
//     // Initialize container (for sharing dependencies)
//     if (container.init) {
//       await container.init();
//     }
  
//     return container;
//   }
  

export async function loadMicrofrontend(config) {
    try {
      // Dynamically import the remote app
      console.log("loading app...", config);
      const module = await import('remoteApp/Button');
      
      // Return the default export (Svelte component)
      console.log("Loaded remote app...", module);
      
      return module.default;
    } catch (error) {
      console.error('Failed to load microfrontend:', error);
      throw error;
    }
  }
  