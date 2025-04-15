<script>
    import Header from "../main_page_elements/header.svelte"
    import SmallProject from "../main_page_elements/SmallProject.svelte"

    import { base } from "$app/paths"
    import { projects } from "$lib/projects.json"
</script>


<Header />

<main>
    <div class="grid two">
        {#each projects as project}
        <SmallProject
            pathName={project.path}
            name={project.name}
            subtitle={project.subtitle}
            image="{base}{project.image}"
            style="margin-right: 5px;"
            sidePadding={50}
            rightPadding={5}
            nbrOfProjetcs={2}
            description={[true, project.description]}
        />
        {/each}
    </div>
</main>


<style>
    main {
        font-family: Lexend;
        color: white;
        
        font-weight: 200;
        padding: 20px 50px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        gap: 1rem;
        margin: 50px 0;
    }

    .grid.two { grid-template-columns: repeat(2, 1fr); }
</style>
