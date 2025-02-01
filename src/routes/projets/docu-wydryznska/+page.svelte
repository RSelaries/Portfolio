<script>
    import documentaire from "$lib/projects/docu-wydrzysnka/Louise Raphael - Amnesty final.mp4"
    import Header from "../header.svelte";
</script>


<Header />

<section class="main">
    <h1>Documentaire amnesty - Justyna Wydrzynska</h1>
    <div class="media-description-wrapper">
        <div class="media-wrapper">
            <iframe
                src="https://www.youtube.com/embed/B5elVAPeR2o?si=0aVJXAJ6VLCgDvBR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
        <div class="description-wrapper">
            <h2>Un truc ici</h2>
            <p class="project-description">
                <br>
                Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses Gros caca text du caca des fesses 
            </p>
        </div>
    </div>
</section>


<style>
    @import "../../../lib/global.css";

    .main {
        font-family: Lexend;
        color: white;
        
        font-weight: 200;
        padding: 20px 50px;
        margin-top: 50px;
    }

    .media-description-wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;
    }

    .description-wrapper {
        padding: 0px 50px;

        h2 {
            font-family: Movement;
            font-size: 1.7rem;
            font-weight: 900;

            color: #0000;
            -webkit-text-stroke: 1px yellow;

            text-transform: uppercase;
        }
    }

    iframe {
        width: 60vw;
        aspect-ratio: 16/9;
    }

    h1 {
        font-weight: 200;
        font-size: 2.5rem;
        line-height: 90%;
        font-family: Movement;

        margin-bottom: 30px;
    }
</style>
