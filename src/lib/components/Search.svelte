
<script lang="ts">
    import Search from "$lib/components/Icon/Search.svelte"
</script>


<section class="relative flex w-full items-baseline">
    <div class="mr-2 text-pastelPuruple mt-auto"><Search /></div>
    <input type="text" name="search" placeholder="Search by keyword" class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-xl text-black outline-none focus:border-b-lavenderIndigo focus:border-solid"/>
    <button class="font-sansSerif text-xl font-black text-pastelPurple">Search</button>
</section>