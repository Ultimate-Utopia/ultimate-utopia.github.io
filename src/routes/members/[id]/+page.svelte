<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import PlatformIcon from '$lib/components/PlatformIcon.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let visible = $state(false);

	const platformLabels: Record<string, string> = {
		youtube: 'YouTube',
		twitch: 'Twitch',
		twitter: '𝕏 / Twitter'
	};

	const platformColors: Record<string, string> = {
		youtube: 'rgba(255, 0, 0, 0.15)',
		twitch: 'rgba(100, 65, 165, 0.2)',
		twitter: 'rgba(29, 161, 242, 0.15)'
	};

	const platformBorders: Record<string, string> = {
		youtube: 'rgba(255, 0, 0, 0.3)',
		twitch: 'rgba(100, 65, 165, 0.4)',
		twitter: 'rgba(29, 161, 242, 0.3)'
	};

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>{data.member.name} ({data.member.nameEn}) — 終焉理想庭</title>
</svelte:head>

<div class="member-page" class:visible>
	<!-- Atmospheric background -->
	<div class="page-bg">
		<div class="bg-gradient"></div>
		<div class="bg-pattern"></div>
	</div>

	<!-- Back navigation -->
	<a href="{base}/" class="back-link">
		<span class="back-arrow">←</span>
		<span>返回公會大廳</span>
	</a>

	<article class="member-content">
		<!-- Header / Identity -->
		<header class="member-header">
			<div class="header-sigil">
				<div class="sigil-frame">
					<span class="sigil-char">{data.member.name[0]}</span>
				</div>
				<div class="sigil-glow"></div>
			</div>

			<div class="header-ornament">
				<div class="orn-line"></div>
				<div class="orn-dot">✦</div>
				<div class="orn-line"></div>
			</div>

			<h1 class="member-name">{data.member.name}</h1>
			<p class="member-name-en">{data.member.nameEn}</p>

			<div class="member-titles">
				<p class="member-title">{data.member.title}</p>
				<p class="member-desc">{data.member.description}</p>
			</div>

			<!-- Platform links -->
			<div class="platform-links">
				{#each data.member.links as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="platform-badge"
						style="background: {platformColors[link.platform]}; border-color: {platformBorders[link.platform]};"
					>
						<PlatformIcon platform={link.platform} size={16} />
						<span>{platformLabels[link.platform]}</span>
					</a>
				{/each}
			</div>
		</header>

		<!-- Info panels -->
		<div class="info-grid">
			<div class="info-panel">
				<div class="panel-header">
					<span class="panel-icon">◈</span>
					<span class="panel-label">直播時間</span>
				</div>
				<div class="panel-divider"></div>
				<p class="panel-content">{data.member.schedule}</p>
			</div>

			<div class="info-panel">
				<div class="panel-header">
					<span class="panel-icon">◈</span>
					<span class="panel-label">直播風格</span>
				</div>
				<div class="panel-divider"></div>
				<p class="panel-content">{data.member.style}</p>
			</div>
		</div>

		<!-- Topics / Interests -->
		<div class="topics-section">
			<div class="topics-header">
				<div class="orn-line"></div>
				<span class="topics-label">擅長 & 感興趣主題</span>
				<div class="orn-line"></div>
			</div>

			<div class="topics-grid">
				{#each data.member.topics as topic, i}
					<span class="topic-tag" style="animation-delay: {i * 0.05}s">
						{topic}
					</span>
				{/each}
			</div>
		</div>
	</article>
</div>

<style>
	.member-page {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		padding: 6rem 2rem 4rem;
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.member-page.visible {
		opacity: 1;
	}

	/* Atmospheric background */
	.page-bg {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}

	.bg-gradient {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 60% 50% at 50% 20%,
			rgba(107, 68, 168, 0.04) 0%,
			transparent 70%
		);
	}

	.bg-pattern {
		position: absolute;
		inset: 0;
		opacity: 0;
	}

	/* Back link */
	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--text-dim);
		letter-spacing: 0.05em;
		margin-bottom: 3rem;
		transition: color 0.3s ease;
	}

	.back-link:hover {
		color: var(--gold);
	}

	.back-arrow {
		font-size: 1rem;
		transition: transform 0.3s ease;
	}

	.back-link:hover .back-arrow {
		transform: translateX(-4px);
	}

	/* Content container */
	.member-content {
		max-width: 700px;
		margin: 0 auto;
	}

	/* ─── Header ─── */
	.member-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.header-sigil {
		position: relative;
		width: 80px;
		height: 80px;
		margin: 0 auto 2rem;
	}

	.sigil-frame {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(140, 105, 20, 0.3);
		transform: rotate(45deg);
	}

	.sigil-char {
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--gold);
		transform: rotate(-45deg);
	}

	.sigil-glow {
		position: absolute;
		inset: -20px;
		background: radial-gradient(circle, rgba(140, 105, 20, 0.08), transparent 70%);
		animation: glowPulse 4s ease-in-out infinite;
	}

	@keyframes glowPulse {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 1; }
	}

	.header-ornament {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.orn-line {
		width: 40px;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--gold-dim));
	}

	.orn-line:last-child {
		background: linear-gradient(90deg, var(--gold-dim), transparent);
	}

	.orn-dot {
		color: var(--gold);
		font-size: 0.5rem;
	}

	.member-name {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 700;
		color: var(--gold-bright);
		letter-spacing: 0.12em;
		text-shadow: 0 0 40px rgba(140, 105, 20, 0.1);
		animation: fadeUp 0.8s ease 0.1s both;
	}

	.member-name-en {
		font-family: var(--font-display);
		font-size: 0.75rem;
		color: var(--text-dim);
		letter-spacing: 0.4em;
		text-transform: uppercase;
		margin-top: 0.5rem;
		animation: fadeUp 0.8s ease 0.2s both;
	}

	.member-titles {
		margin-top: 1.5rem;
		animation: fadeUp 0.8s ease 0.3s both;
	}

	.member-title {
		font-family: var(--font-serif);
		font-size: 1.05rem;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
	}

	.member-desc {
		font-family: var(--font-serif);
		font-size: 0.9rem;
		color: var(--text-dim);
		margin-top: 0.25rem;
	}

	/* Platform badges */
	.platform-links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
		animation: fadeUp 0.8s ease 0.4s both;
	}

	.platform-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border: 1px solid;
		border-radius: 4px;
		font-size: 0.8rem;
		color: var(--text-secondary);
		transition: all 0.3s ease;
	}

	.platform-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	/* ─── Info panels ─── */
	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		margin-bottom: 2.5rem;
		animation: fadeUp 0.8s ease 0.5s both;
	}

	.info-panel {
		background: linear-gradient(165deg, rgba(255, 255, 255, 0.85), rgba(248, 248, 252, 0.9));
		border: 1px solid var(--border-glow);
		border-radius: 2px;
		padding: 1.5rem;
		position: relative;
		transition: border-color 0.3s ease;
	}

	.info-panel:hover {
		border-color: rgba(140, 105, 20, 0.3);
	}

	.panel-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.panel-icon {
		color: var(--gold);
		font-size: 0.7rem;
	}

	.panel-label {
		font-family: var(--font-serif);
		font-size: 0.8rem;
		color: var(--gold);
		letter-spacing: 0.1em;
	}

	.panel-divider {
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, var(--border-glow), transparent);
		margin-bottom: 0.75rem;
	}

	.panel-content {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.8;
	}

	/* ─── Topics ─── */
	.topics-section {
		animation: fadeUp 0.8s ease 0.6s both;
	}

	.topics-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.topics-label {
		font-family: var(--font-serif);
		font-size: 0.85rem;
		color: var(--gold);
		letter-spacing: 0.1em;
		white-space: nowrap;
	}

	.topics-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.topic-tag {
		padding: 0.4rem 1rem;
		background: linear-gradient(135deg, rgba(107, 68, 168, 0.08), rgba(26, 74, 122, 0.08));
		border: 1px solid rgba(107, 68, 168, 0.2);
		border-radius: 2px;
		font-size: 0.8rem;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
		animation: tagFadeIn 0.4s ease both;
		transition: all 0.3s ease;
	}

	.topic-tag:hover {
		border-color: rgba(140, 105, 20, 0.35);
		color: var(--gold-bright);
		background: linear-gradient(135deg, rgba(107, 68, 168, 0.12), rgba(26, 74, 122, 0.12));
	}

	@keyframes tagFadeIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 640px) {
		.member-page {
			padding: 5rem 1.25rem 3rem;
		}
		.info-grid {
			grid-template-columns: 1fr;
		}
		.member-name {
			font-size: 1.8rem;
		}
	}
</style>
