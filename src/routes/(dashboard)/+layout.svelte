<script lang="ts">
	import Authenticated from '$lib/components/Authenticated.svelte';
	import Navbar from '$lib/components/NavBar.svelte';
	import SnackBar from '$lib/components/SnackBar.svelte';
</script>

<Authenticated>
<SnackBar />
<aside class="grid min-h-screen grid-cols-12 bg-whisper md:gap-x-16">
	<Navbar />
	<main class="col-span-12 px-4 pt-4 md:col-span-8 md:pt-10">
		<slot />
	</main>
</aside>
</Authenticated>