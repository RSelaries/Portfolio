<!-- @component
    This component needs the current page to include the global.css
-->
<script>
    import { base } from "$app/paths"

    let { opacity = 1, style, isGif = false, toggleIsGif } = $props()
</script>


<div class="header-wrapper" style="opacity: {opacity};" data-sveltekit-reload>
    <header {style}>
        <div class="buttons">
            <a href="{base}/">Home</a>
            <a href="{base}/projets">Projets</a>

            <!-- Gif / Image -->
             {#if toggleIsGif}
             <div style="width: 100%;" id="button-spacer"></div>
             <button onclick={() => toggleIsGif()}>
                 {#if !isGif}
                 Images
                 {:else}                  
                 Gifs
                 {/if}
             </button>
             {/if}
            <!-- Gif / Image -->

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

        z-index: 5;
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

    button {
        font-family: Movement;
        padding: 10px;
        font-size: 1.3rem;
        text-decoration: none;
        color: #0000;
        font-weight: 900;

        color: white;
        background-color: #0000;
        border: none;
        
        white-space: nowrap;
    }

</style>