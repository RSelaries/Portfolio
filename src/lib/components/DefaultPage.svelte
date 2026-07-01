<script>
    let { children } = $props()
</script>

<div class="page-wrapper">
    <article>
        {@render children()}
    </article>
</div>

<style>
    .page-wrapper {
        margin: 3.5em 0em;
        margin-right: 4em;
        flex: 1;
        display: flex;

        article {
            max-width: var(--page-size);
            flex: 1;
        }
    }
</style>