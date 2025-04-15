<script>
    import { base } from "$app/paths"

    let { name, subtitle, image, imageAlt, style, sidePadding, rightPadding, pathName, nbrOfProjetcs = 4, description = [false, ""] } = $props()
</script>

<a href="{base}{pathName}" class="wrapper" style={style + `--sides-padding: ${sidePadding}px; --projects-right-padding: ${rightPadding}px; --nbr-of-small-projects: ${nbrOfProjetcs};`}>
    <div class="small_project">
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        <img src={image} alt={imageAlt}>

        {#if description[0] = true && description[1] != ""}
        <div style="margin: 15px 0;">
            {@html description[1]}
        </div>
        {/if}
    </div>
</a>


<style>
    .wrapper {
        --carousel-width: calc(100vw - calc(2 * var(--sides-padding)));
        --right-padding: 5px;
        --right-padding-total: calc(var(--right-padding) * var(--nbr-of-small-projects));
        --width-left: calc(var(--carousel-width) - var(--right-padding-total));
        --small-project-width: calc(var(--width-left) / var(--nbr-of-small-projects));

        color: white;
        text-decoration: none;
    }

    .wrapper:hover {
        cursor: pointer;
    }

    .small_project {
        color: #fff;
        box-sizing: border-box;
        transform-origin: center;
        padding: 10px;
        border-radius: 10px;
        width: var(--nbr-of-small-projects);
    }

    .small_project:hover {
        box-sizing: border-box;
        transform: scale(1.05);
        background-color: #222;
        /* border: #555 solid 1px; */
        box-shadow:0px 0px 0px 1px #555;
    }

    img {
        --width: calc(var(--small-project-width) - calc(10px * 2));

        width: var(--width);
        height: calc(var(--width) * calc(9/16));
        object-fit: cover;
    }

    h1 {
        font-family: Movement;
        font-weight: 200;
        font-size: 18px;
    }

    h2 {
        font-family: Lexend;
        font-weight: 200;
        font-size: 15px;
        color: #555;

        margin-bottom: 15px;
    }

</style>