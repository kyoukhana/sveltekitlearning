<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte'
  </script>
  
  <aside class="md:gap-x16 grid min-h-screen grid-cols-12 bg-whisper">
	  <Navbar></Navbar>
	  <main class="col-span-12 md:col-span-8 md:p-10"><slot /></main>
  </aside>
  