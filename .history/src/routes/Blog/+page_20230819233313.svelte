<script lang="ts">
    type Post = {name:string}
    export let data:Post[];
    console.log(data)
</script>

{#if posts && posts.length}
    {#each posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}