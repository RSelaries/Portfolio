<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/header.svelte"

    // Assets
    import photo1 from "$lib/projects/visualizer/1.png"

    import premiereVersion from "$lib/projects/visualizer/version1.mp4"
</script>


<Header />

<main>
    <h1>Autoprortaits</h1>
    <p class="project-description">
        Collection d'Autoprortaits photographiques.
    </p>

    <div class="images-grid four">
        <img src={photo1} alt="">
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

    .images-grid.four { grid-template-columns: repeat(4, 1fr); }

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
