<script lang="ts">
	import { onMount } from 'svelte';
	import { members } from '$lib/members';
	import MemberCard from '$lib/components/MemberCard.svelte';

	let heroVisible = $state(false);

	onMount(() => {
		heroVisible = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<!-- HERO -->
<section class="hero" class:visible={heroVisible}>
	<div class="hero-bg">
		<div class="hero-vignette"></div>
		<div class="hero-rays"></div>
	</div>

	<div class="hero-content">
		<div class="hero-sigil">
			<div class="sigil-ring sigil-ring-outer"></div>
			<div class="sigil-ring sigil-ring-inner"></div>
			<div class="sigil-core">✦</div>
		</div>

		<p class="hero-subtitle">各世界的交界地</p>
		<h1 class="hero-title">終焉理想庭</h1>
		<p class="hero-title-en">Ultimate Utopia</p>

		<div class="hero-line"></div>

		<p class="hero-description">
			來自不同世界的靈魂，在此交匯。<br />
			歡迎來到終焉理想庭。
		</p>

		<div class="hero-scroll-hint">
			<span class="scroll-text">SCROLL</span>
			<div class="scroll-line"></div>
		</div>
	</div>
</section>

<!-- GUILD INTRO -->
<section class="guild-intro">
	<div class="reveal">
		<div class="intro-ornament">
			<div class="ornament-line"></div>
			<div class="ornament-diamond">◆</div>
			<div class="ornament-line"></div>
		</div>

		<h2 class="intro-heading">關於公會</h2>
		<p class="intro-text">
			終焉理想庭，是各個世界的交界之地。<br />
			在這裡，不同世界的存在匯聚於同一屋簷之下，<br />
			帶著各自的故事與才華，共同編織屬於這片庭園的傳說。
		</p>
	</div>
</section>

<!-- MEMBERS -->
<section class="members-section">
	<div class="reveal">
		<p class="section-label">✦ Members ✦</p>
		<h2 class="section-title">公會成員</h2>

		<div class="members-grid">
			{#each members as member, i}
				<MemberCard {member} index={i} />
			{/each}
		</div>
	</div>
</section>

<style>
	/* ═══════════════════════ HERO ═══════════════════════ */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.hero-vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 80% 70% at 50% 45%,
			transparent 0%,
			rgba(245, 245, 247, 0.2) 50%,
			rgba(245, 245, 247, 0.6) 100%
		);
	}

	.hero-rays {
		position: absolute;
		top: -20%;
		left: 50%;
		width: 200%;
		height: 140%;
		transform: translateX(-50%);
		background: conic-gradient(
			from 0deg at 50% 60%,
			transparent 0deg,
			rgba(212, 180, 120, 0.05) 15deg,
			transparent 30deg,
			transparent 60deg,
			rgba(107, 68, 168, 0.05) 75deg,
			transparent 90deg,
			transparent 120deg,
			rgba(212, 180, 120, 0.04) 135deg,
			transparent 150deg,
			transparent 180deg,
			rgba(107, 68, 168, 0.04) 195deg,
			transparent 210deg,
			transparent 240deg,
			rgba(212, 180, 120, 0.05) 255deg,
			transparent 270deg,
			transparent 300deg,
			rgba(107, 68, 168, 0.05) 315deg,
			transparent 330deg,
			transparent 360deg
		);
		animation: raysSpin 120s linear infinite;
	}

	@keyframes raysSpin {
		to {
			transform: translateX(-50%) rotate(360deg);
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 2rem;
	}

	/* Sigil emblem */
	.hero-sigil {
		position: relative;
		width: 120px;
		height: 120px;
		margin: 0 auto 2.5rem;
	}

	.sigil-ring {
		position: absolute;
		border-radius: 50%;
		border: 1px solid;
	}

	.sigil-ring-outer {
		inset: 0;
		border-color: rgba(140, 105, 20, 0.25);
		animation: sigilSpin 30s linear infinite;
	}

	.sigil-ring-inner {
		inset: 15px;
		border-color: rgba(140, 105, 20, 0.3);
		animation: sigilSpin 20s linear infinite reverse;
	}

	.sigil-ring-outer::before,
	.sigil-ring-inner::before {
		content: '';
		position: absolute;
		width: 4px;
		height: 4px;
		background: var(--gold);
		border-radius: 50%;
		top: -2px;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0 0 8px var(--gold);
	}

	@keyframes sigilSpin {
		to {
			transform: rotate(360deg);
		}
	}

	.sigil-core {
		position: absolute;
		inset: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		color: var(--gold);
		text-shadow: 0 0 30px rgba(140, 105, 20, 0.3);
		animation: sigilPulse 4s ease-in-out infinite;
	}

	@keyframes sigilPulse {
		0%,
		100% {
			text-shadow: 0 0 30px rgba(140, 105, 20, 0.3);
		}
		50% {
			text-shadow:
				0 0 60px rgba(140, 105, 20, 0.4),
				0 0 120px rgba(140, 105, 20, 0.1);
		}
	}

	.hero-subtitle {
		font-family: var(--font-serif);
		font-size: 0.9rem;
		color: var(--gold);
		letter-spacing: 0.4em;
		margin-bottom: 1rem;
		opacity: 0;
		animation: heroFadeUp 1s ease 0.3s both;
	}

	.hero-title {
		font-family: var(--font-serif);
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 700;
		color: var(--gold-bright);
		letter-spacing: 0.15em;
		text-shadow:
			0 0 60px rgba(140, 105, 20, 0.15),
			0 2px 4px rgba(0, 0, 0, 0.1);
		opacity: 0;
		animation: heroFadeUp 1s ease 0.5s both;
	}

	.hero-title-en {
		font-family: var(--font-display);
		font-size: clamp(0.7rem, 1.5vw, 0.9rem);
		color: var(--text-dim);
		letter-spacing: 0.5em;
		margin-top: 0.5rem;
		opacity: 0;
		animation: heroFadeUp 1s ease 0.7s both;
	}

	.hero-line {
		width: 60px;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
		margin: 2rem auto;
		opacity: 0;
		animation: heroFadeUp 1s ease 0.9s both;
	}

	.hero-description {
		font-family: var(--font-serif);
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 2;
		letter-spacing: 0.05em;
		opacity: 0;
		animation: heroFadeUp 1s ease 1.1s both;
	}

	@keyframes heroFadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-scroll-hint {
		position: absolute;
		bottom: -6rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0;
		animation: heroFadeUp 1s ease 1.5s both;
	}

	.scroll-text {
		font-family: var(--font-heading);
		font-size: 0.6rem;
		letter-spacing: 0.3em;
		color: var(--text-dim);
	}

	.scroll-line {
		width: 1px;
		height: 30px;
		background: linear-gradient(180deg, var(--gold-dim), transparent);
		animation: scrollPulse 2s ease-in-out infinite;
	}

	@keyframes scrollPulse {
		0%,
		100% {
			opacity: 0.3;
			height: 30px;
		}
		50% {
			opacity: 1;
			height: 45px;
		}
	}

	/* ═══════════════════════ GUILD INTRO ═══════════════════════ */
	.guild-intro {
		position: relative;
		z-index: 1;
		padding: 8rem 2rem 4rem;
		text-align: center;
	}

	.intro-ornament {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.ornament-line {
		width: 60px;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--gold-dim));
	}

	.ornament-line:last-child {
		background: linear-gradient(90deg, var(--gold-dim), transparent);
	}

	.ornament-diamond {
		color: var(--gold);
		font-size: 0.6rem;
	}

	.intro-heading {
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--gold-bright);
		letter-spacing: 0.15em;
		margin-bottom: 1.5rem;
	}

	.intro-text {
		font-family: var(--font-serif);
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 2.2;
		max-width: 600px;
		margin: 0 auto;
		letter-spacing: 0.03em;
	}

	/* ═══════════════════════ MEMBERS ═══════════════════════ */
	.members-section {
		position: relative;
		z-index: 1;
		padding: 4rem 2rem 8rem;
	}

	.section-title {
		margin-bottom: 3rem;
	}

	.members-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	@media (max-width: 1024px) {
		.members-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.members-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
		.members-section {
			padding: 3rem 1.25rem 6rem;
		}
		.guild-intro {
			padding: 5rem 1.5rem 3rem;
		}
		.intro-text {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 480px) {
		.members-grid {
			grid-template-columns: 1fr;
			max-width: 320px;
		}
	}
</style>
