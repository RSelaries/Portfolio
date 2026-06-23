<script>
	import { page } from '$app/state';
    import Page from './+page.svelte'
</script>

<h1>{page.status}</h1>
<h2>{page.error.message}</h2>