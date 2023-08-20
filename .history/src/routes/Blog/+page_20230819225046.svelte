<script>

    export let Posts =[]
</script>

{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}