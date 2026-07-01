<script>
	import favicon from '$lib/assets/favicon.png'
	import { base } from '$app/paths'
    import LeftNavbar from './LeftNavbar.svelte'
	import '$lib/css/global.css'
	import '$lib/css/fonts.css'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>RSelaries - Portfolio</title>
</svelte:head>

<div class="page-layout">
	<LeftNavbar>
	</LeftNavbar>
	
	<section class="page-content">
		{@render children()}
	</section>
</div>

<style>
	.page-layout {
		display: flex;
		width: 100%;
		/* background-color: #000;
		background-image: url("$lib/assets/medias/portfolio-background.png"); */
	}

	section.page-content {
		width: 100%;
		/* max-width: 800px; */
		font-family: Lineal;
	}
</style>