<script>
    let { title = "Title" } = $props()
</script>


<div class="thumbnail">
    <h1>{title}</h1>
</div>


<style>
    .thumbnail {
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: .5em 1em;
        border-radius: 10px;
        border: 1px white solid;
    }

    h1 {
        font-size: 18px;
    }
</style>