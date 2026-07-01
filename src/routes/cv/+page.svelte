<script>
    import { base } from "$app/paths"
    import ArticlePage from "$lib/components/ArticlePage.svelte"
    import { cvData } from "./cv-data"
    import CvAside from "./CvAside.svelte"
</script>


<div class="cv-background"></div>

<div class="cv-wrapper">
    <ArticlePage>
        <div class="section-wrapper">
            <div class="line" style="opacity: 0;"></div>
            <a href="{base}/cv.pdf" download="raphael-selaries-cv.pdf">
                <h2>Télécharger CV en PDF.</h2>
            </a>
        </div>
        
        <h1>Expériences</h1>
        <div class="section-wrapper">
            <div class="line"></div>
            <div style="flex: 1;">
                {#each cvData.experiences as experience}
                <div style="padding-bottom: 1em;">
                    <div style="display: flex; align-items: baseline; justify-content: space-between;">
                        <h2>{experience.title}</h2>
                        <span>{experience.date}</span>
                    </div>
                    <h3>{experience.subtitle}</h3>
                    <ul>
                        {#each experience.activities as activity}
                        <li>{activity}</li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
        </div>
        
        <h1>Formations</h1>
        
        <div class="section-wrapper">
            <div class="line"></div>
            <div style="flex: 1;">
                {#each cvData.formations as formation}
                <div style="padding-bottom: 1em;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <h2>{formation.title}</h2>
                        <span>{formation.date}</span>
                    </div>
                    <h3>{formation.subtitle}</h3>
                    <ul>
                        {#each formation.activities as activity}
                        <li>{activity}</li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
        </div>
    </ArticlePage>
    
    <CvAside />
</div>


<style>
    .cv-background {
        z-index: -1;
        background-color: #000;
        background-image: url('$lib/assets/medias/pages/cv/cv-background.png');
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
    .cv-wrapper {
        --line-margin: 1rem;
        --line-size: 1px;
        --line-total-width: calc(calc(var(--line-margin) * 2) + var(--line-size));
        --star-width: .8em;
        --star-title-offset: calc(var(--line-total-width) - calc(var(--star-width) * 0.35));
        display: flex;
    }

    .section-wrapper {
        display: flex;
        flex-direction: row;
        margin: 1rem 0;

        .line {
            border: var(--line-size) solid white;
            border-radius: 50px;
            margin: 0 var(--line-margin);
        }
    }

    span {
        white-space: nowrap;
        font-family: Basteleur;
        font-weight: 700;
    }

    h1 {
        background-color: white;
        color: var(--background-color);
        border-radius: 20px;
        padding: .2em 1rem;
        padding-top: .3em;
        font-size: 24px;
        font-family: Basteleur;
    }

    h2 {
        background-image: url("$lib/assets/medias/star.svg");
        background-repeat: no-repeat;
        background-size: var(--star-width) auto;
        background-position: center left;
        position: relative;
        left: calc(var(--star-title-offset) * -1);
        padding-left: var(--star-title-offset);
        font-weight: 900;
    }

    h3 {
        padding-bottom: .5rem;
        color: #ccc;
        font-weight: 100;
    }

    ul li::marker {
        content: none;
    }
</style>