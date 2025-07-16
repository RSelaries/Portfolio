<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/header.svelte"

    // Assets
    import storyboard1 from "$lib/projects/visualizer/1.png"
    import storyboard2 from "$lib/projects/visualizer/2.png"
    import storyboard3 from "$lib/projects/visualizer/3.png"
    import storyboard4 from "$lib/projects/visualizer/4.png"
    import storyboard5 from "$lib/projects/visualizer/5.png"
    import storyboard6 from "$lib/projects/visualizer/6.png"
    import storyboard7 from "$lib/projects/visualizer/7.png"
    import storyboard8 from "$lib/projects/visualizer/8.png"
    import storyboard9 from "$lib/projects/visualizer/9.png"
    import storyboard10 from "$lib/projects/visualizer/10.png"
    import storyboard11 from "$lib/projects/visualizer/11.png"
    import storyboard12 from "$lib/projects/visualizer/12.png"
    import storyboard13 from "$lib/projects/visualizer/13.png"
    import storyboard14 from "$lib/projects/visualizer/14.png"
    import storyboard15 from "$lib/projects/visualizer/15.png"
    import storyboard16 from "$lib/projects/visualizer/16.png"
    import storyboard17 from "$lib/projects/visualizer/17.png"
    import storyboard18 from "$lib/projects/visualizer/18.png"
    import storyboard19 from "$lib/projects/visualizer/19.png"
    import storyboard20 from "$lib/projects/visualizer/20.png"
    import storyboard21 from "$lib/projects/visualizer/21.png"

    import premiereVersion from "$lib/projects/visualizer/version1.mp4"
</script>


<Header />

<main>
    <h1>Time Zones</h1>
    <div class="media-description-wrapper">
        <div class="media-wrapper">
            <iframe
                src="https://www.youtube.com/embed/URdf1K3icIw?si=R88x-MgHulZGfioX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
        <div class="description-wrapper">
            <!-- <h3>Un truc ici</h3> -->
            <br>
            <p class="project-description">
                Animation vectorielle de trois horloges dans trois villes du monde.
            </p>
        </div>
    </div>

    <h2>Autres projets</h2>
    <ProjectCarousel sidePadding={50} isHomePage={false} isGif={true} currentPage="Visualizer" />
</main>


<style>
    @import "../../../lib/global.css";

    main {
        font-family: Lexend;
        color: white;
        
        font-weight: 200;
        padding: 20px 50px;
        margin: 50px 0;
    }

    .media-description-wrapper {
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;
    }

    .description-wrapper {
        padding: 0px 50px;
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

    h2 {
        text-align: center;
        justify-content: center;
        align-items: center;

        font-family: Movement;
    }
</style>
