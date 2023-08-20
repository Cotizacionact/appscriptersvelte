<script lang="ts">
    type Post = {
    name:string
    }
    export let Posts:Post[];
</script>

{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}