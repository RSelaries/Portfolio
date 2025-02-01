<script>
    let { blur = 0 } = $props()
</script>


<div class="main-page-background" style="--blur: calc(10px * {blur})">
    <div class="background"></div>
    <p class="title">PORTFOLIO</p>
    <div class="foreground"></div>
    <p class="subtitle">SELARIES RAPHAEL</p>
    <p class="sub-subtitle">2025</p>
</div>


<style>
    .main-page-background {
        --blur: 0;

        font-family: Movement;

        pointer-events: none;
        color: #fff;

    }
    
    .main-page-background * {
        filter: blur(var(--blur));
        z-index: -1;
    }

    .main-page-background * {
        position: fixed;
    }

    .title {
        font-weight: 800;
        font-size: 12.5vw;
        padding-bottom: 10vw;
    }

    .subtitle {
        padding-top: 4.5vw;
        font-size: 5vw;
        font-weight: 100;
    }
    
    .sub-subtitle {
        padding-top: 11vw;
        font-size: 1.5vw;
        font-weight: 200;
        letter-spacing: 50%;
    }

    div {
        width: 100vw;
        height: 100vh;
        top: 0;

        background-position: center;
        background-size: cover;

        display: flex;

        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .background {
        background-image: url("../../lib/assets/film-photo-perrine-back.jpg");
        z-index: -2;
    }

    .foreground {
        background-image: url("../../lib/assets/perrine.png");
    }
</style>