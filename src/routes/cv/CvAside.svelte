<script>
    import { aside } from "./cv-data"
    import cvProfilePicture from '$lib/assets/medias/pages/cv/cv-profile-picture.png'
</script>

<div class="cv-aside">
    <img class="profile-picture" src={cvProfilePicture} alt="Profil du CV">
    

    <h1>Profil</h1>
    <p>{aside.presentation}</p>
    <br>

    <h1>Coordonnées</h1>
    <ul>
        {#each aside.contactInfos as contact}
            {#if contact.link}
            <li class="contact"><img src="{contact.img}" alt="{contact.name}">
                <a target="_blank" href={contact.link}>{contact.value}</a>
            </li>
            {:else}
            <li class="contact"><img src="{contact.img}" alt="{contact.name}">
                <p>{contact.value}</p>
            </li>
            {/if}
        {/each}
    </ul>
    <br>

    <h1>Langues</h1>
    <div style="display: flex; gap: 2em;">
        <div style="display: flex; flex-direction: column;">
            {#each aside.languages as language }
                <span>{language.name}</span>
            {/each}
        </div>
        <div style="display: flex; flex-direction: column;">
            {#each aside.languages as language }
                <span style="font-weight: 900; font-family: Basteleur;">{language.level}</span>
            {/each}
        </div>
    </div>
    <br>

    <h1>Compétences</h1>
    <ul>
        {#each aside.skills as skill}
            <li>{skill}</li>
        {/each}
    </ul>
    <br>

    <h1>Centres d'intérêts</h1>
    <ul>
        {#each aside.hobbies as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
</div>


<style>
    .profile-picture {
        height: 200px;
        border: white 1px solid;
        margin-bottom: 1rem;
    }

    .cv-aside {
        position: static;
        top: 0;
        right: 0;
        --vertical-padding: 3.5em;
        height: calc(100vh - calc(var(--vertical-padding) * 2));
        max-width: 300px;
        padding: var(--vertical-padding) 4em;
    }

    h1 {
        font-family: Basteleur;
        font-size: 20px;
    }

    li::before {
        content: "-";
        margin-right: .5em;
    }
    li::marker {
        content: none;
    }
    li.contact {
        font-weight: 900;
        display: flex;
        align-items: start;
        gap: .5em;
        p, a {
            padding: .2em 0;
        }
        img {
            height: 1.5em;
            width: auto;
        }
    }
    li.contact::before {
        display: none;
    }
</style>