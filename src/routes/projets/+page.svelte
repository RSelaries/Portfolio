<script>
    import Header from "../main_page_elements/header.svelte"
    import SmallProject from "../main_page_elements/SmallProject.svelte"

    import { projects } from "$lib/projects.json"
    import ProjectsGrid from "../main_page_elements/ProjectsGrid.svelte"
    import MainProject from "../main_page_elements/MainProject.svelte"
</script>


<Header />

<main>
    <!-- <ProjectsGrid sidePadding={50} /> -->
    <MainProject forceMain={true}/>
</main>


<style>
    main {
        font-family: Lexend;
        color: white;
        
        font-weight: 200;
        padding: 1px 50px;
        padding-top: 20px;
    }
</style>
