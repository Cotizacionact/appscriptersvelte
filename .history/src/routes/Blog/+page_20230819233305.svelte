<script lang="ts">
    type Post = {name:string}
    export let posts:Post[];
    console.log(posts)
</script>

{#if posts && posts.length}
    {#each posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}