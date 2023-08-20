<script lang="ts">
	import { invalidateAll } from "$app/navigation";
    import {onMount} from "svelte"
	import { supabase } from "../../supabaseClient.server";
    onMount(()=>{
        const {data:{subscription}} = supabase.auth.onAuthStateChange(()=>{
            invalidateAll()
        })
    })
</script>
<slot/>