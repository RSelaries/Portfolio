<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/header.svelte"

    // Assets
    import photo0 from "$lib/projects/avant-denouement/avant_00.jpg"
    import photo1 from "$lib/projects/avant-denouement/avant_01.jpg"
    import photo2 from "$lib/projects/avant-denouement/avant_02.jpg"
    import photo3 from "$lib/projects/avant-denouement/avant_03.jpg"
    import photo4 from "$lib/projects/avant-denouement/avant_04.jpg"
    import photo5 from "$lib/projects/avant-denouement/avant_05.jpg"
    import photo6 from "$lib/projects/avant-denouement/avant_06.jpg"
    import photo7 from "$lib/projects/avant-denouement/avant_07.jpg"
    import photo8 from "$lib/projects/avant-denouement/avant_08.jpg"
    import photo9 from "$lib/projects/avant-denouement/avant_09.jpg"
    import photo10 from "$lib/projects/avant-denouement/avant_10.png"
    import photo11 from "$lib/projects/avant-denouement/avant_11.jpg"

    let photos = [
        photo0, photo1, photo2, photo3, photo4,
        photo5, photo6, photo7, photo8, photo9,
        photo10, photo11
    ]
</script>


<Header />

<main>
    <h1>Avant le dénouement</h1>
    <p class="project-description">
        Série de collages photographiques.
    </p>

    <div class="images-grid">
        {#each photos as photo}
            <img src={photo} alt="">
        {/each}
    </div>

    <h2>Autres projets</h2>
    <ProjectCarousel sidePadding={50} isHomePage={false} isGif={true} currentPage="Dénouement" />
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

        column-count: 3;
        column-gap: 1rem;
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
