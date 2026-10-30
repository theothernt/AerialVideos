<script lang="ts">
	// LazyImage.svelte - A static, JS-free lazy loading image component for Svelte 5.
	// Uses the browser's native lazy loading, so it works with `csr = false`.

	interface Props {
		src: string;
		alt?: string;
		width?: string | number;
		height?: string | number;
		class?: string;
		placeholderClass?: string;
	}

	let {
		src,
		alt = '',
		width = 16,
		height = 9,
		class: className = '',
		placeholderClass = 'bg-black/50'
	}: Props = $props();
</script>

<div class="{placeholderClass} {className} w-full" style="aspect-ratio: {width}/{height};">
	<img {src} {alt} loading="lazy" decoding="async" class="w-full h-full object-cover" />
</div>
