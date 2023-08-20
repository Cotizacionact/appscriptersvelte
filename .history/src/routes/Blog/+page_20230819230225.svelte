<script lang="ts">
    type Post = {
    name:string
    }
     /** @type {import('./$types').PageData} */
    export let Posts:Post[];
</script>
<div>
{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}
</div>