<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = $state(false);
	let currentPath = $derived(page.url.pathname);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function navigateTo(event: any, path: string) {
		event.preventDefault();
		closeMenu();
		goto(path);
	}
</script>

<header
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-2">
			<a href="/" class="flex items-center space-x-2">
				<span class="text-xl font-bold">CodeCompleteMedia</span>
			</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden gap-6 md:flex">
			<a
				href="/"
				class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/'
					? 'text-primary'
					: ''}"
			>
				Home
			</a>
			<a
				href="/about"
				class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/about'
					? 'text-primary'
					: ''}"
			>
				About
			</a>
			<a
				href="/services"
				class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/services'
					? 'text-primary'
					: ''}"
			>
				Services
			</a>
			<a
				href="/contact"
				class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/contact'
					? 'text-primary'
					: ''}"
			>
				Contact
			</a>
		</nav>

		<div class="flex items-center gap-4">
			<ThemeToggle />
			<a
				href="/login"
				class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 hidden h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
			>
				Log In
			</a>
			<a
				href="/signup"
				class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground hidden h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
			>
				Sign Up
			</a>

			<!-- Mobile Menu Button -->
			<button
				onclick={toggleMenu}
				class="ring-offset-background focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md border p-0 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
				aria-label="Toggle Menu"
			>
				{#if isMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6"
					>
						<path d="M18 6 6 18"></path>
						<path d="m6 6 12 12"></path>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6"
					>
						<line x1="4" x2="20" y1="12" y2="12"></line>
						<line x1="4" x2="20" y1="6" y2="6"></line>
						<line x1="4" x2="20" y1="18" y2="18"></line>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="container mx-auto px-4 py-4 md:hidden">
			<nav class="flex flex-col space-y-4">
				<a
					href="/"
					onclick={(event) => navigateTo(event, '/')}
					class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/'
						? 'text-primary'
						: ''}"
				>
					Home
				</a>
				<a
					href="/about"
					onclick={(event) => navigateTo(event, '/about')}
					class="hover:text-primary text-sm font-medium transition-colors {currentPath === '/about'
						? 'text-primary'
						: ''}"
				>
					About
				</a>
				<a
					href="/services"
					onclick={(event) => navigateTo(event, '/services')}
					class="hover:text-primary text-sm font-medium transition-colors {currentPath ===
					'/services'
						? 'text-primary'
						: ''}"
				>
					Services
				</a>
				<a
					href="/contact"
					onclick={(event) => navigateTo(event, '/contact')}
					class="hover:text-primary text-sm font-medium transition-colors {currentPath ===
					'/contact'
						? 'text-primary'
						: ''}"
				>
					Contact
				</a>
				<div class="flex flex-col space-y-2 pt-2">
					<a
						href="/login"
						onclick={(event) => navigateTo(event, '/login')}
						class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Log In
					</a>
					<a
						href="/signup"
						onclick={(event) => navigateTo(event, '/signup')}
						class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
