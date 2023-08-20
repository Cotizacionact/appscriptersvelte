<script lang="ts">
	import Register from "./register.svelte";
    import type {Component} from "$lib"

    let state:number = 0

    let StateHandler:{[key:number]:Component} = {
        0:Register
    }
</script>

<svelte:component this={StateHandler[state]}></svelte:component>