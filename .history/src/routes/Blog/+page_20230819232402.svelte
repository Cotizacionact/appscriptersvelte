<script lang="ts">
	import type { PageData } from "./$types";

    export let Posts:PageData

</script>
<div id="here">
{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}
</div>