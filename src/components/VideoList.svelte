<script lang="ts">
	import LazyImage from './LazyImage.svelte';
	import { type Video } from '../lib/types';
	
	export let videos: Video[];
	export let title: string;
	export let message: string;
	export let anchor: string;

	const videoFormats = [
		{ key: 'url-1080-SDR', label: '1080p SDR', class: 'preset-filled' },
		{ key: 'url-1080-HDR', label: '1080p Dolby Vision', class: 'preset-filled' },
		{ key: 'url-4K-SDR', label: '4K SDR', class: 'preset-filled' },
		{ key: 'url-4K-HDR', label: '4K Dolby Vision', class: 'preset-filled' },
		{ key: 'url-1080-H264', label: '1080p H.264', class: 'preset-filled-surface-500', addBreak: true }
	];
</script>

<div class="p-10 w-full mx-auto">
	<h1 class="mb-5 text-left h1" id={anchor}>{title}</h1>
	{#if message}
		<div class="card preset-tonal-warning border border-warning-500 p-4 mb-5 w-3/4">{@html message}</div>
	{/if}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
		{#each videos as video, index}
			<div class="card card-hover preset-filled-surface-100-900 overflow-hidden rounded-lg">						<header class="relative">
					<span class="badge absolute preset-filled-primary-500 top-2 left-2 z-10">{index + 1}</span>
					<LazyImage
						width={16}
						height={9}
						src="thumbnails/{video.id}.webp"
						className="w-full"
						placeholderClassName="bg-black/50"
						fadeDelay={0}
						fadeDuration={500}
						alt={video.accessibilityLabel}
					/>
				</header>
				<div class="p-4 space-y-4">
					<h5 class="h5">{video.accessibilityLabel}</h5>
					{#each videoFormats as format}
						{#if video[format.key as keyof Video]}
							{#if format.addBreak}<br />{/if}
							<a class="btn btn-sm {format.class}" href={video[format.key as keyof Video]}>{format.label}</a>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
