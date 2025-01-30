<script>
    import intro_video from "$lib/assets/dream_scape_intro.mp4"

    let style = $state("")
    let isActive = $state(true)

    let transitionTime = 2 // In seconds
</script>


{#if isActive}
<div class="video-wrapper filter_nearest">
    <video autoplay muted class="background-video" {style} onended={ () => {
        style = `transition: ${transitionTime}s ease-in-out; opacity: 0;`;
        setTimeout(() => isActive = false, transitionTime * 1100) // Remove the component after the fade-out
    }}>
        <source src={intro_video} type="video/mp4" />
    </video>
</div>
{/if}


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