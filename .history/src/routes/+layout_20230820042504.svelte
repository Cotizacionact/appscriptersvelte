<script lang="ts">
	import PublicNav from "$lib/Public/Navegation/PublicNav.svelte";
    import "../app.css";

    import { invalidate, invalidateAll } from '$app/navigation'
    import { onMount } from 'svelte'
	import { supabase } from "../supabaseClient";

  
    onMount(() => {
      const{ data:{subscription}}=supabase.auth.onAuthStateChange(()=>{
        invalidateAll();
      })
      return()=>{
        subscription.unsubscribe()
      }
    });
</script>
<PublicNav></PublicNav>  
  <slot />