<script>
    import SmallProject from "./SmallProject.svelte"
    import { projects } from "$lib/projects.json"
    import { base } from "$app/paths"
    import StandardButton from "./StandardButton.svelte"

    let { sidePadding } = $props()

    let left = $state(0)
    function pan(direction) { // Direction being either 1 (left) or -1 (right)
        let carouselWidth = document.getElementById("carousel").clientWidth
        let carouselFullWidth = document.getElementById("projects-grid").scrollWidth

        left += carouselWidth * direction
        left = Math.min(Math.max(left, -1 * carouselFullWidth + carouselWidth), 0)
    }   
</script>


<div class="wrapper" id="carousel">
    <div class="projects-grid grid two" id="projects-grid" style={`left: ${left}px`}>
        {#each projects as project}
            <SmallProject
                nbrOfProjetcs=2
                pathName={project.path}
                name={project.name}
                subtitle={project.subtitle}
                image="{base}{project.image}"
                style="margin-right: 20px;" {sidePadding}
                rightPadding={20}
                description={[true, project.description]}
            />
        {/each}
    </div>
</div>


<style>
    .wrapper {
        position: relative;
        display: flex;
        margin-top: 50px;
    }

    .projects-grid {
        color: #fff;
        display: flex;
        position: relative;

        width: 100%;

        flex-direction: row;
        align-items: end;

        transition: all 0.5s ease-in-out;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .grid.two { grid-template-columns: repeat(2, 1fr); }
</style>