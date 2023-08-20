<script lang="ts">
	import Register from "./register.svelte";
    import type {Component} from "$lib"
	import SignIn from "./SignIn.svelte";
	import SignOut from "./SignOut.svelte";

    let state:number = 0

    let StateHandler:{[key:number]:Component} = {
        1:Register,
        2:SignIn,
        3:SignOut
    }
</script>

<svelte:component this={StateHandler[state]}></svelte:component>