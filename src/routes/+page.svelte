<script>
    import background from "$lib/assets/background.png"
    import IntroDreamscapeVideo from "./IntroDreamscapeVideo.svelte";
</script>


<div class="background filter_nearest"></div>

<IntroDreamscapeVideo />
Test2


<style>
    @import "../lib/global.css";

    .background {
        z-index: -1;
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100vw;
        background-image: url("../lib/assets/background.png");
        background-position: center;
        background-size: cover;
    }
</style>