<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/header.svelte"
    import { base } from "$app/paths"

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

    // import premiereVersion from "$lib/projects/visualizer/version1.mp4"
</script>


<Header />

<main>
    <h1>Visualizer</h1>
    <div class="media-description-wrapper">
        <div class="media-wrapper">
            <iframe
                src="https://www.youtube.com/embed/xpmkGxxlwag?si=WDC2r2cF4R7uB9Ax"
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
                Visualizer (court vidéo clip qui boucle, designé pour les applications de musique comme Spotify ou Deezer)
                de la musique <i style="color: violet;">Let it Happen</i> de l'album <i style="color: violet;">Currents</i>
                de <i style="color: violet;">Tame Impala</i>.
            </p>
        </div>
    </div>

    <div style="width: 100%; display: flex; gap: 50px">
        <div>
            <h2>PremiÈre version</h2>
            <div style="display: flex; width: auto; justify-content: center; margin: 50px 0;">
                <!-- <video src={premiereVersion} controls>
                    <track kind="captions" />
                </video> -->
                <video src="{base}/projects/visualizer/version1.mp4" controls>
                    <track kind="captions" />
                </video>
            </div>
        </div>
    
        <div>
            <h2>Storyboard</h2>
            <div class="images-grid seven">
                <img src={storyboard1} alt="">
                <img src={storyboard2} alt="">
                <img src={storyboard3} alt="">
                <img src={storyboard4} alt="">
                <img src={storyboard5} alt="">
                <img src={storyboard6} alt="">
                <img src={storyboard7} alt="">
                <img src={storyboard8} alt="">
                <img src={storyboard9} alt="">
                <img src={storyboard10} alt="">
                <img src={storyboard11} alt="">
                <img src={storyboard12} alt="">
                <img src={storyboard13} alt="">
                <img src={storyboard14} alt="">
                <img src={storyboard15} alt="">
                <img src={storyboard16} alt="">
                <img src={storyboard17} alt="">
                <img src={storyboard19} alt="">
                <img src={storyboard19} alt="">
                <img src={storyboard20} alt="">
                <img src={storyboard21} alt="">
            </div>
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

    .images-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        gap: 1rem;
        margin: 50px 0;

        img {
            width: 100%;
        }
    }

    .images-grid.seven { grid-template-columns: repeat(7, 1fr); }

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
