<script>
    import StandardButton from "./StandardButton.svelte"
    import { base } from "$app/paths"
    import { projects } from "$lib/projects.json"

    let { image, imageAlt = "", projectName = "Project Name", projectType = "Project - Type", description, isGif } = $props()
</script>

{#each projects as project}
    {#if project.main}
        <div class="main-project">
            {#if isGif}
            <img class="filter-nearest" src="{base}{project.gif}" alt="">
            {:else}
            <img class="filter-nearest" src="{base}{project.image}" alt="">
            {/if}
            <div class="project-texts">
                <div class="project-name">
                    <h1>{project.name}</h1>
                    <h2>{project.subtitle}</h2>
                </div>
                <div>
                    {@html project.description}
                </div>
                <div class="button-wrapper">
                    <StandardButton style={"margin-top: 30px;"} href={project.path}>Voir le projet</StandardButton>
                </div>
            </div>
        </div>
    {/if}
{/each}


<style>
    .main-project {
        font-family: Lexend;
        font-weight: 100;
        display: flex;
        flex-direction: row;
        color: #fff;

        margin: 50px 0;
    }

    img {
        width: 50%;
        height: calc(50% * calc(9/16));
        object-fit: cover;
    }

    .project-texts {
        padding: 40px;
        width: 30%;
    }

    .project-name {
        align-items: end;
        padding-left: 40px;
        padding-bottom: 1.5rem;

        h1 {
            font-size: 2rem;
            font-family: Movement;
            font-weight: 200;

            margin-bottom: -0.2rem;
        }

        h2 {
            font-weight: 200;
            font-size: 0.9rem;
            color: #555;
        }
    }

    .button-wrapper {
        margin: 15px 40px;
    }

</style>