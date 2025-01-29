<script>
    import MainPageBackground from "./main_page_elements/MainPageBackground.svelte";
    import MainProject from "./main_page_elements/MainProject.svelte"

    import dreamscapeThumbnail from "$lib/assets/dreamscape-miniature.png"
    import ProjectCarousel from "./main_page_elements/ProjectCarousel.svelte"
</script>


<MainPageBackground />
<div class="content">
    <MainProject name={"Dreamscape"} subtitle={"Jeu Vidéo - Godot"} thumbnail={dreamscapeThumbnail}
        thumbnailAlt={"Screenshot from my small video game Dreamscape."}
        description={`Petit jeu vidéo de type <a href="https://fr.wikipedia.org/wiki/Walking_simulator">Walking Simulator</a> où le joueur explore un métro solitaire et se voit transporté dans ses rêves à l'aide d'un dispositif électronique. \n\
            <b>[à continer...]</b>
        `}
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
