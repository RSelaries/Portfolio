<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../header.svelte"

    // Assets
    import image1 from "$lib/projects/docu-wydrzysnka/amnesty_img_1.png"
    import image2 from "$lib/projects/docu-wydrzysnka/PDF Amnesty International 2.jpg"
    import image3 from "$lib/projects/docu-wydrzysnka/amnesty_img_3.png"
    import image5 from "$lib/projects/docu-wydrzysnka/amnesty_img_5.png"
</script>


<Header />

<main>
    <h1>Dreamscape</h1>
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
                Jeu vidéo type <a href="https://fr.wikipedia.org/wiki/Walking_simulator">Walking Simulator</a>
                où le joueur se verra traverser un metro solitaire et explorera ses propres rêves.
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

    <h2>Autres projets</h2>
    <ProjectCarousel sidePadding={50} isHomePage={false} isGif={true} currentPage="Dreamscape" />
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
