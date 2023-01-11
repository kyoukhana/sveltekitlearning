<aside class="gap-x16 grid min-h-screen grid-cols-12 bg-whisper">
	<header class="col-span-3 bg-daisyBush text-center">
		<figure>
			<a href="/invoices"><img src="/images/logo.svg" alt="The Dollar Holler" class="mx-auto" /></a>
		</figure>

		<nav>
			<ul class="list-none text-2xl font-bold">
				<li><a href="/invoices">Invoices</a></li>
				<li><a href="/clients">Clients</a></li>
				<li><a href="#">Settings</a></li>
				<li><a href="#">Logout</a></li>
			</ul>
		</nav>
	</header>
	<main class="col-span-8 p-10"><slot/></main>
</aside>

<style lang="postcss">
	nav ul li {
		@apply mb-6;
	}

	nav ul li a {
		@apply mb-6 font-bold text-white hover:text-goldenFizz;
	}
</style>
