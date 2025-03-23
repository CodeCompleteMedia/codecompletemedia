<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);
	let currentPath = $derived(page.url.pathname);

	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '#about', label: 'About' },
		{ path: '#services', label: 'Services' },
		{ path: '#contact', label: 'Contact' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function navigateTo(event: any, path: string) {
		event.preventDefault();
		goto(path);
		isMenuOpen = false;
	}

	// Handle scroll event to update navbar appearance
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		// Initial check
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class={isScrolled ? 'scrolled' : ''}>
	<div class="container">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<nav>
			<div class="logo">
				<a href="/">
					<img
						src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_horizontal-pOG1dKrWyz8gYxR5TOKy70t0NRXzbr.png"
						alt="Code Complete Media Logo"
					/>
				</a>
			</div>

			<ul class="nav-links {isMenuOpen ? 'active' : ''}">
				{#each navItems as item}
					<li>
						<a
							href={item.path}
							onclick={(event) => navigateTo(event, item.path)}
							class={currentPath === item.path ? 'active' : ''}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div class="hamburger {isMenuOpen ? 'active' : ''}" onclick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background-color: rgba(255, 255, 255, 1);
		transition: all 0.5s ease;
	}

	header.scrolled {
		background-color: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.nav-links li a.active {
		color: var(--primary-color);
	}

	.nav-links li a.active::after {
		width: 100%;
	}
</style>
