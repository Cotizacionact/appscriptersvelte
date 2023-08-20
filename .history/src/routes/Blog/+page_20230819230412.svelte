<script lang="ts">
    type Post = {
    name:string
    }

    export let Posts:Post[];
    console.log(Posts)
</script>
<div id="here">
{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}
</div>