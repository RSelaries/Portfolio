<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/Header.svelte"

    // Assets
    import photo1 from "$lib/projects/maree-basse/1.png"
    import photo2 from "$lib/projects/maree-basse/2.png"
    import photo3 from "$lib/projects/maree-basse/3.png"
    import photo4 from "$lib/projects/maree-basse/4.png"
    import photo5 from "$lib/projects/maree-basse/5.png"
    import photo6 from "$lib/projects/maree-basse/6.png"
    import photo7 from "$lib/projects/maree-basse/7.png"
    import photo8 from "$lib/projects/maree-basse/8.png"

    let photos = [
        photo1, photo2, photo3, photo4,
        photo5, photo6, photo7, photo8
    ]
</script>


<Header />

<main>
    <h1>Marée Basee</h1>
    <p class="project-description">
        Série de dessins, ancre de chine, pastels gras.
    </p>

    <div class="images-grid">
        {#each photos as photo}
            <img src={photo} alt="">
        {/each}
    </div>

    <h2>Autres projets</h2>
    <ProjectCarousel sidePadding={50} isHomePage={false} isGif={true} currentPage="Photos Lorine Mercier" />
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
        padding: 50px 0;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        width: 100%;

        img {
            padding-bottom: 1rem;
            display: block;
            width: 100%;
        }
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
