<script>
    import DefaultPage from "$lib/components/DefaultPage.svelte"
    import ProjectThumbnail from "$lib/components/ProjectThumbnail.svelte"
</script>


<DefaultPage>
    <h1>Projets mis en avant</h1>
    <div class="project-grid main">
        <ProjectThumbnail title="Test"/>
        <ProjectThumbnail title="Test 2"/>
        <ProjectThumbnail title="Test caca"/>
    </div>

    <h1>Title 2</h1>
    <div class="project-grid default">
        <ProjectThumbnail title="Test caca"/>
        <ProjectThumbnail title="Test caca"/>
        <ProjectThumbnail title="Test caca"/>
    </div>
    
    <h1>Title 3</h1>
    <div class="project-grid default">
        <ProjectThumbnail title="Test caca"/>
        <ProjectThumbnail title="Test caca"/>
        <ProjectThumbnail title="Test caca"/>
    </div>
</DefaultPage>


<style>
    .project-grid {
        gap: .5em;
        margin-bottom: 2em;
    }

    .project-grid.default {
        display: flex;
        flex-direction: row;

        > :global(*) {
            flex: 1;
            aspect-ratio: 1.8;
        }
    }
    
    .project-grid.main {
        display: grid;
        grid-template-columns: 5fr 3fr;
        aspect-ratio: 1.8;
        grid-template-areas:
            "a b"
            "a c"
        ;
    }
    .project-grid.main :global(:nth-child(1)) { grid-area: a; }
    .project-grid.main :global(:nth-child(2)) { grid-area: b; }
    .project-grid.main :global(:nth-child(3)) { grid-area: c; }
</style>