<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/header.svelte"

    // Assets
    import image1 from "$lib/projects/docu-wydrzysnka/amnesty_img_1.png"
    import image2 from "$lib/projects/docu-wydrzysnka/PDF Amnesty International 2.jpg"
    import image3 from "$lib/projects/docu-wydrzysnka/amnesty_img_3.png"
    import image5 from "$lib/projects/docu-wydrzysnka/amnesty_img_5.png"

    import storyboard1 from "$lib/projects/docu-wydrzysnka/story_board_1.jpg"
    import storyboard2 from "$lib/projects/docu-wydrzysnka/story_board_2.jpg"
    import storyboard3 from "$lib/projects/docu-wydrzysnka/story_board_3.jpg"
    import storyboard4 from "$lib/projects/docu-wydrzysnka/story_board_4.jpg"
</script>


<Header />

<main>
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
            <!-- <h3>Un truc ici</h3> -->
            <br>
            <p class="project-description">
                Une animation 3D qui raconte l'histoire du combat de Justyna Wydrzynska contre la justice Polonaise,
                pour le droit à l'avortement.<br>
                <br>
                Il sagit d'un projet en binôme, visant à représenter une histoire recueillie par amnesty international,
                dans un medium numérique autour d'1m30s.<br>
                <br>
                <span style="font-family: Justyna; letter-spacing: -30%; color: yellow;">cette fonte à également été créée pour le projet.</span>
            </p>
        </div>
    </div>

    <h2>Recherches visuelles</h2>
    <div class="images-grid two">
        <img src={image1} alt="">
        <img src={image3} alt="">
        <img src={image5} alt="">
        <img src={image2} alt="">
    </div>
    
    <h2>Storyboard</h2>
    <div class="images-grid four">
        <img src={storyboard1} alt="">
        <img src={storyboard2} alt="">
        <img src={storyboard3} alt="">
        <img src={storyboard4} alt="">
    </div>

    <h2>Autres projets</h2>
    <ProjectCarousel sidePadding={50} isHomePage={false} isGif={true} currentPage="Documentaire Amnesty" />
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

    .images-grid.two { grid-template-columns: repeat(2, 1fr); }
    .images-grid.four { grid-template-columns: repeat(4, 1fr); }

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
