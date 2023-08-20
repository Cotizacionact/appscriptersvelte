<script lang="ts">
    type Post = {name:string}
    export let posts:Post[];
</script>

{#if posts && posts.length}
    {#each posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}