<script>
    import MainPageBackground from "./main_page_elements/MainPageBackground.svelte"
    import MainProject from "./main_page_elements/MainProject.svelte"

    import dreamscapeThumbnail from "$lib/assets/background.png"
    import ProjectCarousel from "./main_page_elements/ProjectCarousel.svelte"
</script>

<MainPageBackground />
<div class="content">
    <MainProject
        projectName={"Dreamscape"}
        projectType={"Jeu Vidéo - Godot"}
        image={dreamscapeThumbnail}
        imageAlt={"Screenshot from my video game Dreamscape."}
        description={`Jeu vidéo type <a href="https://fr.wikipedia.org/wiki/Walking_simulator">walking simulator</a> où le joueur se verra traverser un metro solitaire et explorera ses propres rêves.`}
    />
    <ProjectCarousel sidePadding={50} />
    <div class="a-propos-wrapper">
        <div class="a-propos">
            <h1>À propos</h1>
            <br />
            <p>
                Je suis étudiant en dernière année de
                <a href="https://shorturl.at/sUWpE"> DNMADe Numérique</a> à
                l’école ENSAAMA - Olivier de Serres. <br />
                <br />
                Dans ma formation j’ai pu toucher au motion design, la modélisation
                3D, de la photographie et vidéo. J’ai également eu un formation sur
                les arts plastiques, majoritairement du dessin mais aussi du modelage.
                <br />
                <br />
                Je suis un amoureux des jeux vidéos indépendants qui, par leur esthétique
                ou gameplay, amènent quelque chose en plus au medium. C'est pour
                cela que j'aimerais moi même pouvoir participer à la création d'un
                jeu vidéo.
            </p>
        </div>
    </div>
</div>

<style>
    @import "../lib/global.css";

    .content {
        background-color: #111;

        padding: 50px;
        padding-top: 50px;
        padding-bottom: 100px;
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
    }
</style>
