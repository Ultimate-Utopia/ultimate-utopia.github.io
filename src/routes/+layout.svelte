<script lang="ts">
	import '../app.css';
	import ParticleField from '$lib/components/ParticleField.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>終焉理想庭 ─ Ultimate Utopia</title>
	<meta name="description" content="各世界的交界地 — 終焉理想庭 VTuber 公會官方網站" />
</svelte:head>

<div class="noise-overlay"></div>
<ParticleField />
<Navigation />

<main>
	{@render children()}
</main>

<footer class="site-footer">
	<div class="footer-ornament ornament">終焉理想庭</div>
	<div class="footer-links">
		<a href="https://x.com/ultimateutopia8" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Twitter">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		</a>
	</div>
	<p class="footer-copy">&copy; 2026 終焉理想庭 Ultimate Utopia</p>
</footer>

<style>
	main {
		position: relative;
		z-index: 1;
		min-height: 100vh;
	}

	.site-footer {
		position: relative;
		z-index: 1;
		padding: 3rem 2rem 2rem;
		text-align: center;
		border-top: 1px solid var(--border-faint);
		background: linear-gradient(0deg, rgba(245, 245, 247, 0.95), transparent);
	}

	.footer-ornament {
		font-size: 0.65rem;
		margin-bottom: 1rem;
	}

	.footer-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.footer-social {
		color: var(--text-dim);
		transition: color 0.3s ease;
	}

	.footer-social:hover {
		color: var(--gold);
	}

	.footer-copy {
		font-size: 0.75rem;
		color: var(--text-dim);
		letter-spacing: 0.05em;
	}
</style>
