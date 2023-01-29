<script lang="ts">
	import Search from '$lib/components/Icon/Search.svelte';
</script>

<section class="relative flex w-full items-baseline">
	<div class="text-pastelPuruple mr-2 mt-auto"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="search w-full lg:w-72  md:w-[14rem] border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-base lg:text-xl text-black outline-none focus:border-solid focus:border-b-lavenderIndigo"
	/>
	<button class="font-sansSerif text-lg lg:text-xl font-black text-pastelPurple">Search</button>
</section>
