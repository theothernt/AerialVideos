<script lang="ts">
	// LazyImage.svelte - A simple lazy loading image component for Svelte 5
	import { onMount } from 'svelte';

	let {
		src,
		alt = '',
		width = 16,
		height = 9,
		className = '',
		placeholderClassName = 'bg-black/50',
		fadeDelay = 0,
		fadeDuration = 500
	}: {
		src: string;
		alt?: string;
		width?: string | number;
		height?: string | number;
		className?: string;
		placeholderClassName?: string;
		fadeDelay?: number;
		fadeDuration?: number;
	} = $props();

	let loaded = $state(false);
	let visible = $state(false);
	let element: HTMLElement;

	onMount(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ rootMargin: '100px' }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});

	function onImageLoad() {
		loaded = true;
	}

	let imgStyle = $derived(`
		transition: opacity ${fadeDuration}ms ${fadeDelay}ms;
		opacity: ${loaded ? 1 : 0};
	`);
</script>

<div class="{placeholderClassName} {className} w-full" bind:this={element} style="aspect-ratio: {width}/{height};">
	{#if visible}
		<img {src} {alt} style={imgStyle} class="w-full h-full object-cover" onload={onImageLoad} />
	{/if}
</div>
