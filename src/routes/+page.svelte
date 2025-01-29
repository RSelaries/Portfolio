<script>
    import MainPageBackground from "./main_page_elements/MainPageBackground.svelte";
    import MainProject from "./main_page_elements/MainProject.svelte"

    import dreamscapeThumbnail from "$lib/assets/background.png"
    import ProjectCarousel from "./main_page_elements/ProjectCarousel.svelte"
</script>


<MainPageBackground />
<div class="content">
    <MainProject projectName={"Dreamscape"} projectType={"Jeu Vidéo - Godot"} image={dreamscapeThumbnail} imageAlt={"Screenshot from my video game Dreamscape."}/>
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
