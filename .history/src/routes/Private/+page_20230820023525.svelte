<script lang="ts">
    import type {PageData} from "./$types"
    export let data: PageData
    console.log("data",data)
</script>

{#if data.session}
    <h1>Hello</h1>
{#else}
<div>test</div>
{/if}