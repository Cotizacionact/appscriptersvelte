<script lang="ts">
    type Post = {name:string}
    export let data 
    const {posts} = data
</script>

{#if posts && posts.length}
    {#each posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}