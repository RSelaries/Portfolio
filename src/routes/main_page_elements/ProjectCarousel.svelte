<script>
    import SmallProject from "./SmallProject.svelte"
    import { projects } from "$lib/projects.json"
    import { base } from "$app/paths"
    import StandardButton from "./StandardButton.svelte"

    let { sidePadding, isGif, isHomePage = true, currentPage } = $props()

    let left = $state(0)
    function pan(direction) { // Direction being either 1 (left) or -1 (right)
        let carouselWidth = document.getElementById("carousel").clientWidth
        let carouselFullWidth = document.getElementById("project-carousel").scrollWidth

        left += carouselWidth * direction
        left = Math.min(Math.max(left, -1 * carouselFullWidth + carouselWidth), 0)
    }
</script>


<div class="wrapper" id="carousel">
    <div class="project-carousel" id="project-carousel" style={`left: ${left}px`}>
        {#each projects as project}
            {#if (!project.main ||!isHomePage) && (currentPage != project.name)}
                <SmallProject pathName={project.path} name={project.name} subtitle={project.subtitle} image="{base}{isGif ? project.gif : project.image}" style="margin-right: 5px;" {sidePadding} rightPadding={5} />
            {/if}
        {/each}
    </div>
    <div class="buttons-wrapper">
        <button class="pan-button left" onclick={() => pan(1)}>&lt;</button>
        <button class="pan-button right" onclick={() => pan(-1)}>&gt;</button>
    </div>
</div>
<br>
<div class="projects-button-wrapper">
    <StandardButton href={"/projets"}>Tous les projets</StandardButton>
</div>


<style>
    .wrapper {
        position: relative;
        display: flex;
        margin-top: 50px;
    }

    .project-carousel {
        color: #fff;
        display: flex;
        position: relative;

        width: fit-content;

        flex-direction: row;
        align-items: end;

        transition: all 0.5s ease-in-out;
    }

    .buttons-wrapper {
        --button-width: calc(calc(100vw - 100%) / 2);

        pointer-events: none;

        display: flex;
        
        align-items: center;
        justify-content: space-between;

        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .pan-button {
        width: calc(var(--button-width) * 1.1);
        height: 70%;
        position: relative;
        pointer-events: all;

        background-color: #0005;
        border: none;
        color: #fff;
        font-family: Londrina Outline;
        font-size: 2.5rem;
    }

    .pan-button:hover {
        background-color: #000b !important;
        cursor: pointer;
        border: solid 1px #5558;
    }

    .pan-button.left {
        left: calc(var(--button-width) * -1);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-left: none;
    }
    .pan-button.right {
        right: calc(var(--button-width) * -1);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-right: none;
    }

    .projects-button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

</style>