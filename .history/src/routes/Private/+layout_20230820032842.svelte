<script lang="ts">
	import { invalidateAll } from "$app/navigation";
    import {onMount} from "svelte"
	import { supabase } from "../../supabaseClient"
    import type {User} from "@supabase/supabase-js"
    let user: User|null
    onMount(()=>{
        supabase.auth.getSession().then(({ data: { session } }) => {
         user = session?.user ?? null;
        });
        const {data:{subscription}} = supabase.auth.onAuthStateChange((_, session)=>{
            const currentUser = session?.user
            user = currentUser ?? null;
        });

        return ()=>{
            subscription.unsubscribe()
        }
    })
</script>
<slot/>