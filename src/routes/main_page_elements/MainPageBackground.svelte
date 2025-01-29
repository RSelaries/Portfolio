
<div class="main-page-background">
    <div class="background"></div>
    <p class="title">PORTFOLIO</p>
    <div class="foreground"></div>
    <p class="subtitle">SELARIES RAPHAEL</p>
    <p class="sub-subtitle">2025</p>
</div>


<style>
    .main-page-background {
        font-family: Movement;

        pointer-events: none;
        color: #fff;
    }

    .main-page-background * {
        z-index: -1;
    }

    .main-page-background * {
        position: fixed;
    }

    .title {
        font-weight: 800;
        font-size: 12rem;
        padding-bottom: 20vh;
    }

    .subtitle {
        padding-top: 10vh;
        font-size: 5rem;
        font-weight: 100;
    }
    
    .sub-subtitle {
        padding-top: 23vh;
        font-size: 1.5rem;
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