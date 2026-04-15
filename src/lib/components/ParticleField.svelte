<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		const particles: Array<{
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			opacity: number;
			pulse: number;
			pulseSpeed: number;
			hue: number;
		}> = [];

		function resize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		function initParticles() {
			particles.length = 0;
			const count = Math.floor((canvas.width * canvas.height) / 18000);
			for (let i = 0; i < count; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 2 + 0.5,
					speedX: (Math.random() - 0.5) * 0.15,
					speedY: (Math.random() - 0.5) * 0.1 - 0.05,
					opacity: Math.random() * 0.5 + 0.1,
					pulse: Math.random() * Math.PI * 2,
					pulseSpeed: Math.random() * 0.02 + 0.005,
					hue: Math.random() > 0.7 ? 45 : Math.random() > 0.5 ? 270 : 220
				});
			}
		}

		function draw() {
			ctx!.clearRect(0, 0, canvas.width, canvas.height);

			for (const p of particles) {
				p.x += p.speedX;
				p.y += p.speedY;
				p.pulse += p.pulseSpeed;

				if (p.x < -10) p.x = canvas.width + 10;
				if (p.x > canvas.width + 10) p.x = -10;
				if (p.y < -10) p.y = canvas.height + 10;
				if (p.y > canvas.height + 10) p.y = -10;

				const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
				const glow = p.size * 3;

				ctx!.beginPath();
				ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);

				const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
				gradient.addColorStop(0, `hsla(${p.hue}, 50%, 55%, ${currentOpacity * 0.5})`);
				gradient.addColorStop(1, `hsla(${p.hue}, 50%, 55%, 0)`);
				ctx!.fillStyle = gradient;
				ctx!.fill();
			}

			animationId = requestAnimationFrame(draw);
		}

		resize();
		initParticles();
		draw();

		window.addEventListener('resize', () => {
			resize();
			initParticles();
		});

		return () => {
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="particle-field" aria-hidden="true"></canvas>
