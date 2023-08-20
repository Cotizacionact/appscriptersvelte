<script lang="ts">
	import Register from "./register.svelte";

    let satate:number = 0

    let StateHandler = {
        0:Register
    }
</script>

<svelte:component>{StateHandler[state]}</svelte:component>