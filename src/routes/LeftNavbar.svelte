<script>
    import NavbarLink from './NavbarLink.svelte'
    import { base } from '$app/paths'
    import { page } from '$app/state'
</script>

<div class="site-navbar">
    <nav class="home-nav">
        <a href="{base}/" class="home-btn"><h1>Raphaël<br>Selaries</h1></a>
        <NavbarLink href="/a-propos">À propos & Contacts</NavbarLink>
        <NavbarLink href="/cv">CV</NavbarLink>
    </nav>

    <nav class="dir-nav">
        <h2>Travaux</h2>
        <NavbarLink href="/projets">Projets</NavbarLink>
        <NavbarLink href="/jeux-video">Jeux Vidéo</NavbarLink>
        <NavbarLink href="/photographie">Photographies</NavbarLink>
        <NavbarLink href="/art">Art</NavbarLink>
    </nav>

    <nav class="links-nav">
        <h2>Liens</h2>
        <a target="_blank" href="https://www.linkedin.com/in/raphael-selaries/">LinkedIn</a>
        <a target="_blank" href="https://rselaries.itch.io/">itch.io</a>
        <a target="_blank" href="https://rselaries.github.io">Github</a>
        <a target="_blank" href="https://www.youtube.com/@RaphaelSELARIES">Youtube</a>
    </nav>
</div>

<style>
    :root {
        --vertical-padding-amount: 3.5em;
        --horizontal-padding-amount: 4em;
    }

    .site-navbar {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - calc(var(--vertical-padding-amount) * 2));
        padding: var(--vertical-padding-amount) var(--horizontal-padding-amount);
        /* width: fit-content; */
        flex: 1;
        max-width: 250px;
    }

    .home-nav {
        .home-btn {
            font-family: Basteleur;
            font-size: 19px;
            color: white;
        }
        .home-btn::before {
            display: none;
        }
    }

    h2 {
        font-family: Basteleur;
        font-weight: 900;
        color: white;
    }

    nav {
        display: flex;
        flex-direction: column;
        
        a {
            color: #ccc;
            font-size: 18px;
        }
        a::before {
            content: "-";
            margin-right: .5em;
            text-decoration: none;
            display:inline-block;
        }
    }
</style>