<script lang="ts">
	// LazyImage.svelte - A simple lazy loading image component for Svelte 5
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string = '';
	export let width: string | number = 16;
	export let height: string | number = 9;
	export let className: string = '';
	export let placeholderClassName: string = 'bg-black/50';
	export let fadeDelay: number = 0;
	export let fadeDuration: number = 500;

	let loaded = false;
	let visible = false;
	let element: HTMLElement;

	onMount(() => {
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

	$: imgStyle = `
		transition: opacity ${fadeDuration}ms ${fadeDelay}ms;
		opacity: ${loaded ? 1 : 0};
	`;
</script>

<div class="{placeholderClassName} {className} w-full" bind:this={element} style="aspect-ratio: {width}/{height};">
	{#if visible}
		<img 
			{src}
			{alt}
			style={imgStyle}
			class="w-full h-full object-cover"
			on:load={onImageLoad}
		/>
	{/if}
</div>
