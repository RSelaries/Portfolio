<script>
    // External code
    import { clamp, mapRange } from "$lib/utils"
    import { onMount } from "svelte"

    // Components
    import MainPageBackground from "./main_page_elements/MainPageBackground.svelte"
    import MainProject from "./main_page_elements/MainProject.svelte"

    // Assets
    import dreamscapeThumbnail from "$lib/assets/background.png"
    import ProjectCarousel from "./main_page_elements/ProjectCarousel.svelte"
    import Header from "./main_page_elements/header.svelte"

    let scroll = $state(0)
    let height = $state()
    let blur = $state(0)
    
    $effect(() => {
        let scrollPercent = scroll / height
        let remapedScrollPercent = mapRange(scrollPercent, 0.3, 1, 0, 1)
        let clampedRemapedScrollPercent = clamp(remapedScrollPercent, 0, 1)

        blur = clampedRemapedScrollPercent
    })
</script>


<svelte:window bind:scrollY={scroll} bind:innerHeight={height} />

<Header opacity={blur}/>

<MainPageBackground blur={blur} />
<div class="content">
    <MainProject />
    <ProjectCarousel sidePadding={50} />
    <div class="a-propos-wrapper">
        <div class="a-propos" id="a-propos">
            <h1>À propos</h1>
            <br />
            <p>
                Je suis étudiant diplômé d'un
                <a href="https://ensaama.net/site/home/formations/dnmade/numerique-expriences-narratives-et-interactives">
                DNMADe Numérique</a> à l’école ENSAAMA - Olivier de Serres. <br />
                <br />
                Dans ma formation j’ai pu toucher au motion design, la modélisation
                3D, de la photographie, vidéo ainsi que la programmation (ce site web
                atant par ailleurs codé par moi-même avec la librairie <a href="https://svelte.dev/">svelte</a>).
                <br />
                J’ai également eu une formation sur les arts plastiques, majoritairement
                du dessin, mais aussi du modelage.
                <br />
                <br />
                Je suis un amoureux des jeux vidéos indépendants qui, par leur esthétique
                ou gameplay, amènent quelque chose en plus au medium. C'est pour
                cela que j'apprend en ce moment le moteur de jeu <a href="https://godotengine.org/">Godot</a> en auto-didacte.
            </p>
        </div>
    </div>
</div>

<style>
    @import "../lib/global.css";

    .content {
        background-color: #111;

        padding: 1px 50px;
    }

    .a-propos-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0px;
    }

    .a-propos {
        width: 38vw;
        color: white;
        font-family: Lexend;
        font-weight: 200;
        min-width: 350px;

        h1 {
            font-family: Movement;
            font-weight: 200;
        }

        p {
            text-align: justify;
        }

        a {
            color: #9d00ff;
            text-decoration: none;
            transition: color 0.2s ease-in-out;

            &:hover {
                color: #a900e6;
            }   
        }
    }
</style>
