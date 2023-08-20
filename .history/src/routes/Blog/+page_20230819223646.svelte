<script lang="ts">
    import type {Post} from "./+page"
    export let Posts:Post[];
</script>

{#if Posts && Posts.length}
    {#each Posts as Post}
        <div>{Post.name}</div>
    {/each}

{/if}