<script>
    import { page } from '$app/state'
    import { base } from '$app/paths'

    let { children, href = "/" } = $props()
    let hrefPath = $derived(base + href)
</script>

<a href="{hrefPath}" class="{page.url.pathname === hrefPath ? 'current' : ''}">
    {@render children()}
</a>

<style>
    a {
        text-decoration: none;
        font-family: Lineal;
        font-weight: 400;
        color: #bbb;
        font-size: 18px;
    }
    a.current {
        color: #fff;
        font-weight: 700;
    }
    a:hover {
        text-decoration: underline dashed;
    }
    a::before {
        content: "-";
        margin-right: .5em;
        text-decoration: none;
        display:inline-block;
    }
</style>