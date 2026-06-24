<script>
    let { children } = $props()
</script>

<div class="article-wrapper">
    <article>
        {@render children()}
    </article>
</div>

<style>
    .article-wrapper {
        padding: 2em 0em;
        flex: 1;
        display: flex;

        article {
            max-width: var(--article-size);
            flex: 1;
        }
    }
</style>