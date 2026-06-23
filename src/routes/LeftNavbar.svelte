<script>
    import { base } from '$app/paths'
    import { page } from '$app/state'

    function isCurrent(path) {
        return page.url.pathname === {base} + path ? 'current' : ''
    }

    $effect(() => console.log(base + page.url.pathname))
</script>

<div class="site-navbar">
    <nav class="home-nav">
        <a href="{base}/" class="home-btn {page.url.pathname === {base} + '/' ? 'current' : ''}"><h1>Raphaël<br>Selaries</h1></a>
        <a href="{base}/a-propos" class="{page.url.pathname === {base} + '/a-propos' ? 'current' : ''}">À propos & Contacts</a>
        <a href="{base}/cv" class="{isCurrent('/cv')}">CV</a>
    </nav>

    <nav class="dir-nav">
        <h2>Travaux</h2>
        <a href="{base}/" class="{isCurrent('/')}">Projets</a>
        <a href="{base}/" class="{isCurrent('/')}">Jeux Vidéo</a>
        <a href="{base}/" class="{isCurrent('/')}">Photographies</a>
        <a href="{base}/" class="{isCurrent('/')}">Art</a>
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
        width: fit-content;
    }

    .home-nav {
        .home-btn {
            font-family: Basteleur;
            font-size: 18px;
            color: white;
        }
        .home-btn:hover {
            text-decoration: none;
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
            text-decoration: none;
            font-family: Lineal;
            color: #ccc;
            font-size: 18px;
        }
        a:hover {
            text-decoration: underline dashed;
        }
        a::before {
            content: "-";
            margin-right: .5em;
            text-decoration: none;
            display:inline-block;
        }
    }
</style>