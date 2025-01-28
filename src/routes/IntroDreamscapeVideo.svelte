<script>
    import intro_video from "$lib/assets/dream_scape_intro.mp4"

    let style = $state("")
</script>


<div class="video-wrapper filter_nearest">
    <video autoplay muted class="background-video" {style} onended={() => style = "transition: 2s ease-in-out; opacity: 0;"}>
        <source src={intro_video} type="video/mp4" />
    </video>
</div>


<style>
    .background-video {
        height: auto;
        width: 100vw;
    }

    .video-wrapper {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>