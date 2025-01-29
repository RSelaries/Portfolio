<script>
    let { thumbnail, thumbnailAlt = "", name = "Project Name", subtitle = "Project - Type", description } = $props()
</script>


<div class="main-project">
    <img class="filter-nearest" src={thumbnail} alt={thumbnailAlt}>
    <div class="project-texts">
        <div class="project-name">
            <h1>{name}</h1>
            <h2>{subtitle}</h2>
        </div>
        <div class="description">
            {@html description}
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
        margin-bottom: 60px;
    }

    img {
        width: 50%;
    }

    .project-texts {
        padding: 40px;
        padding-top: 20px;
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

    .description {
        white-space: pre-line;
    }

</style>