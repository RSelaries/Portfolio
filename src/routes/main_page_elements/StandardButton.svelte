<script>
    import { base } from "$app/paths"

    let { children, href = "", onclick = "", style } = $props()
</script>


{#if href == ""}
<button class="button" {onclick} {style}>{@render children?.()}</button>
{:else} 
<div {style}><a class="button" href="{base}{href}">{@render children?.()}</a></div>
{/if}


<style>
    .button {
        font-family: Movement;
        font-weight: 500;
        font-size: 20px;
        margin: 10px 0px;
        padding: 7px 20px;
        border-radius: 50px;
        border: #fff solid 1px;
        background-color: #0000;
        color: #fff;
        text-decoration: none;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .button:hover {
        background-color: #555;
        cursor: pointer;
    }

    .button:focus {
        color: #111;
        background-color: #fff;
    }
</style>