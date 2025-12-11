<script lang="ts">
	// LazyImage.svelte - A simple lazy loading image component for Svelte 5

	interface Props {
		src: string;
		alt?: string;
		width?: string | number;
		height?: string | number;
		class?: string;
		placeholderClass?: string;
		fadeDelay?: number;
		fadeDuration?: number;
	}

	let {
		src,
		alt = '',
		width = 16,
		height = 9,
		class: className = '',
		placeholderClass = 'bg-black/50',
		fadeDelay = 0,
		fadeDuration = 500
	}: Props = $props();

	let loaded = $state(false);
	let visible = $state(false);

	function lazyLoad(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ rootMargin: '100px' }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	function onImageLoad() {
		loaded = true;
	}

	let imgStyle = $derived(`
		transition: opacity ${fadeDuration}ms ${fadeDelay}ms;
		opacity: ${loaded ? 1 : 0};
	`);
</script>

<div class="{placeholderClass} {className} w-full" use:lazyLoad style="aspect-ratio: {width}/{height};">
	{#if visible}
		<img {src} {alt} style={imgStyle} class="w-full h-full object-cover" onload={onImageLoad} />
	{/if}
</div>
