<script lang="ts">
	import { base } from '$app/paths';
	import type { Member } from '$lib/members';
	import PlatformIcon from './PlatformIcon.svelte';

	let { member, index = 0 }: { member: Member; index?: number } = $props();
</script>

<a
	href="{base}/members/{member.id}"
	class="card"
	style="animation-delay: {index * 0.08}s"
>
	<div class="card-sigil">
		<span class="sigil-letter">{member.name[0]}</span>
	</div>

	<div class="card-frame">
		<div class="corner corner-tl"></div>
		<div class="corner corner-tr"></div>
		<div class="corner corner-bl"></div>
		<div class="corner corner-br"></div>

		<div class="card-content">
			<h3 class="card-name">{member.name}</h3>
			<p class="card-name-en">{member.nameEn}</p>
			<p class="card-title">{member.title}</p>

			<div class="card-links">
				{#each member.links as link}
					<span class="card-platform">
						<PlatformIcon platform={link.platform} size={14} />
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="card-glow"></div>
</a>

<style>
	.card {
		position: relative;
		display: block;
		padding: 1px;
		animation: cardFadeIn 0.6s ease both;
		cursor: pointer;
	}

	@keyframes cardFadeIn {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.card-frame {
		position: relative;
		background: linear-gradient(
			165deg,
			rgba(255, 255, 255, 0.9) 0%,
			rgba(248, 248, 252, 0.95) 100%
		);
		border: 1px solid var(--border-glow);
		border-radius: 2px;
		padding: 2rem 1.25rem 1.5rem;
		overflow: hidden;
		transition: all 0.4s ease;
	}

	.card:hover .card-frame {
		border-color: rgba(140, 105, 20, 0.4);
		background: linear-gradient(
			165deg,
			rgba(255, 255, 255, 0.98) 0%,
			rgba(252, 250, 255, 1) 100%
		);
	}

	/* Decorative corners */
	.corner {
		position: absolute;
		width: 12px;
		height: 12px;
		border-color: var(--gold-dim);
		border-style: solid;
		transition: border-color 0.4s ease;
	}

	.card:hover .corner {
		border-color: var(--gold);
	}

	.corner-tl { top: 4px; left: 4px; border-width: 1px 0 0 1px; }
	.corner-tr { top: 4px; right: 4px; border-width: 1px 1px 0 0; }
	.corner-bl { bottom: 4px; left: 4px; border-width: 0 0 1px 1px; }
	.corner-br { bottom: 4px; right: 4px; border-width: 0 1px 1px 0; }

	/* Central sigil */
	.card-sigil {
		position: absolute;
		top: -1px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}

	.sigil-letter {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: #fff;
		border: 1px solid var(--border-glow);
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 600;
		color: var(--gold);
		transform: rotate(45deg);
		transition: all 0.4s ease;
	}

	.sigil-letter > :global(*),
	.sigil-letter {
		line-height: 1;
	}

	/* Un-rotate the text inside */
	.sigil-letter::after {
		content: '';
	}

	.card:hover .sigil-letter {
		border-color: var(--gold);
		box-shadow: 0 0 20px rgba(140, 105, 20, 0.2);
		color: var(--gold-bright);
	}

	.card-content {
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.card-name {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--gold-bright);
		margin-top: 0.75rem;
		letter-spacing: 0.08em;
	}

	.card-name-en {
		font-family: var(--font-heading);
		font-size: 0.65rem;
		color: var(--text-dim);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-top: 0.25rem;
	}

	.card-title {
		font-size: 0.8rem;
		color: var(--text-secondary);
		margin-top: 0.75rem;
		line-height: 1.5;
	}

	.card-links {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.card-platform {
		color: var(--text-dim);
		transition: color 0.3s ease;
	}

	.card:hover .card-platform {
		color: var(--text-secondary);
	}

	/* Hover glow effect */
	.card-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 120%;
		height: 120%;
		transform: translate(-50%, -50%);
		background: radial-gradient(ellipse, rgba(140, 105, 20, 0.06), transparent 70%);
		opacity: 0;
		transition: opacity 0.4s ease;
		pointer-events: none;
		z-index: 0;
	}

	.card:hover .card-glow {
		opacity: 1;
	}

	@media (max-width: 640px) {
		.card-frame {
			padding: 1.75rem 1rem 1.25rem;
		}
		.card-name {
			font-size: 1rem;
		}
	}
</style>
