<script>
    import ProjectCarousel from "../../main_page_elements/ProjectCarousel.svelte"
    import Header from "../../main_page_elements/Header.svelte"

    // Assets
    import photo1 from "$lib/projects/photos-lorine/001.jpg"
    import photo2 from "$lib/projects/photos-lorine/002.jpg"
    import photo3 from "$lib/projects/photos-lorine/003.jpg"
    import photo4 from "$lib/projects/photos-lorine/004.jpg"
    import photo5 from "$lib/projects/photos-lorine/005.jpg"
    import photo6 from "$lib/projects/photos-lorine/006.jpg"
    import photo7 from "$lib/projects/photos-lorine/007.jpg"
    import photo8 from "$lib/projects/photos-lorine/008.jpg"
    import photo9 from "$lib/projects/photos-lorine/009.jpg"
    import photo10 from "$lib/projects/photos-lorine/010.jpg"
    import photo11 from "$lib/projects/photos-lorine/011.jpg"
    import photo12 from "$lib/projects/photos-lorine/012.jpg"
    import photo13 from "$lib/projects/photos-lorine/013.jpg"
    import photo14 from "$lib/projects/photos-lorine/014.jpg"
    import photo15 from "$lib/projects/photos-lorine/015.jpg"
    import photo16 from "$lib/projects/photos-lorine/016.jpg"
    import photo17 from "$lib/projects/photos-lorine/017.jpg"
    import photo18 from "$lib/projects/photos-lorine/018.jpg"
    import photo19 from "$lib/projects/photos-lorine/019.jpg"
    import photo20 from "$lib/projects/photos-lorine/020.jpg"
    import photo21 from "$lib/projects/photos-lorine/021.jpg"
    import photo22 from "$lib/projects/photos-lorine/022.jpg"

    let photos = [
        photo1, photo2, photo3, photo4,
        photo5, photo6, photo7, photo8, photo9,
        photo10, photo11, photo12, photo13, photo14,
        photo15, photo16, photo17, photo18, photo19,
        photo20, photo21, photo22
    ]
</script>


<Header />

<main>
    <h1>Photographies studio</h1>
    <p class="project-description">
        Série de photographies réalisées en studio, mettant en avant le projet d'une camarade de classe.
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
