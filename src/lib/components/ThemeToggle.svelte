<script lang="ts">
	let theme = $state('system');
	let isOpen = $state(false);

	$effect.root(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme) {
				theme = savedTheme;
				applyTheme(theme);
			} else {
				applyTheme('system');
			}

			// Listen for system theme changes
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = () => {
				if (theme === 'system') {
					applyTheme('system');
				}
			};

			mediaQuery.addEventListener('change', handleChange);
			return () => mediaQuery.removeEventListener('change', handleChange);
		}
	});

	function applyTheme(newTheme: string) {
		if (typeof window === 'undefined') return;

		const root = document.documentElement;
		const isDark =
			newTheme === 'dark' ||
			(newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

		root.classList.toggle('dark', isDark);
		localStorage.setItem('theme', newTheme);
	}

	function setTheme(newTheme: string) {
		theme = newTheme;
		applyTheme(newTheme);
		isOpen = false;
	}
</script>

<div class="relative">
	<button
		onclick={() => (isOpen = !isOpen)}
		class="ring-offset-background focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md border p-0 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
		aria-label="Toggle theme"
	>
		<!-- Sun icon -->
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
			class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
		>
			<circle cx="12" cy="12" r="4"></circle>
			<path d="M12 2v2"></path>
			<path d="M12 20v2"></path>
			<path d="m4.93 4.93 1.41 1.41"></path>
			<path d="m17.66 17.66 1.41 1.41"></path>
			<path d="M2 12h2"></path>
			<path d="M20 12h2"></path>
			<path d="m6.34 17.66-1.41 1.41"></path>
			<path d="m19.07 4.93-1.41 1.41"></path>
		</svg>

		<!-- Moon icon -->
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
			class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
		</svg>
	</button>

	{#if isOpen}
		<div
			class="ring-opacity-5 absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none dark:bg-gray-800"
			role="menu"
			aria-orientation="vertical"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				<button
					onclick={() => setTheme('light')}
					class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
					role="menuitem"
					tabindex="-1"
				>
					Light
				</button>
				<button
					onclick={() => setTheme('dark')}
					class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
					role="menuitem"
					tabindex="-1"
				>
					Dark
				</button>
				<button
					onclick={() => setTheme('system')}
					class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
					role="menuitem"
					tabindex="-1"
				>
					System
				</button>
			</div>
		</div>
	{/if}
</div>
