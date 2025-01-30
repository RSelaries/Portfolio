<script>
    import StandardButton from "./StandardButton.svelte"

    let { image, imageAlt = "", projectName = "Project Name", projectType = "Project - Type" } = $props()
</script>


<div class="main-project">
    <img class="filter-nearest" src={image} alt={imageAlt}>
    <div class="project-texts">
        <div class="project-name">
            <h1>{projectName}</h1>
            <h2>{projectType}</h2>
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
        </div>
        <div class="button-wrapper">
            <StandardButton style={"margin-top: 100px;"} href={"/projets"}>Voir le projet</StandardButton>
        </div>
    </div>
</div>


<style>
    .main-project {
        font-family: Lexend;
        font-weight: 100;
        display: flex;
        flex-direction: row;
        color: #fff;
    }

    img {
        width: 50%;
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