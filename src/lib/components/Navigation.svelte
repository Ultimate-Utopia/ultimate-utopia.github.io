<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav class="nav" class:scrolled>
	<a href="{base}/" class="nav-brand">
		<span class="brand-icon">✦</span>
		<span class="brand-text">終焉理想庭</span>
	</a>

	<div class="nav-links">
		<a href="{base}/" class="nav-link" class:active={$page.url.pathname === `${base}/`}>
			首頁
		</a>
		<a
			href="https://x.com/ultimateutopia8"
			target="_blank"
			rel="noopener noreferrer"
			class="nav-link nav-external"
			aria-label="Twitter"
		>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				/>
			</svg>
		</a>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2rem;
		transition: all 0.4s ease;
	}

	.nav.scrolled {
		padding: 0.75rem 2rem;
		background: rgba(245, 245, 247, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-faint);
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 600;
		color: var(--gold-bright);
		letter-spacing: 0.1em;
		transition: opacity 0.3s ease;
	}

	.nav-brand:hover {
		opacity: 0.8;
	}

	.brand-icon {
		color: var(--gold);
		font-size: 0.8rem;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.nav-link {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
		transition: color 0.3s ease;
		position: relative;
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--gold);
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 1px;
		background: var(--gold);
		opacity: 0.6;
	}

	.nav-external {
		display: flex;
		align-items: center;
	}

	@media (max-width: 640px) {
		.nav {
			padding: 1rem 1.25rem;
		}
		.nav.scrolled {
			padding: 0.6rem 1.25rem;
		}
		.brand-text {
			font-size: 0.9rem;
		}
	}
</style>
