<script lang="ts">
	import PublicNav from "$lib/Public/Navegation/PublicNav.svelte";
    import "../app.css";

    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
  
    export let data
  
    let { supabase, session } = data
    $: ({ supabase, session } = data)
  
    onMount(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
          invalidate('supabase:auth')
        }
      })
  
      return () => subscription.unsubscribe()
    });
</script>
<PublicNav></PublicNav>  
  <slot />