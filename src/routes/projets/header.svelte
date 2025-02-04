<!-- @component
    This component needs the current page to include the global.css
-->
<script>
    import { base } from "$app/paths"

    let { opacity = 1, style } = $props()
</script>


<div class="header-wrapper" style="opacity: {opacity};">
    <header {style}>
        <div class="buttons">
            <a href="{base}/">Home</a>
            <a href="{base}/projets">Projets</a>
            <div style="width: 100%;" id="button-spacer"></div>
            <a href="{base}/#a-propos">À propos</a>
        </div>
        <div class="line"></div>
    </header>
</div>



<style>
    header {
        font-family: Movement;
        color: white;
        top: 0;
        position: fixed;
        width: 100vw;
    }

    .buttons {
        display: flex;
        align-items: center;
        padding: 0 30px;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #555;
    }

    a {
        padding: 10px;
        font-size: 1.3rem;
        text-decoration: none;
        color: #0000;
        font-weight: 900;

        -webkit-text-stroke: white 0.6px;
        
        white-space: nowrap;
    }

</style>