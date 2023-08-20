<script lang="ts">
	import Register from "./register.svelte";
    import type {Component} from "$lib"
	import SignIn from "./SignIn.svelte";
	import SignOut from "./SignOut.svelte";

    let state:number = 0

    let StateHandler:{[key:number]:Component} = {
        0:SignIn,
        1:Register,
        2:SignOut
    }
</script>

<svelte:component this={StateHandler[state]}></svelte:component>
