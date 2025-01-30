<script>
    import MainPageBackground from "./main_page_elements/MainPageBackground.svelte";
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
</div>


<style>
    @import "../lib/global.css";

    .content {
        background-color: #111;

        padding: 50px;
        padding-top: 50px;
        padding-bottom: 100px;
   }

</style>
