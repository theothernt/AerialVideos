<script lang="ts">
	import Lazy from 'svelte-lazy';

	interface Video {
		id: string;
		accessibilityLabel: string;
		'url-1080-SDR'?: string;
		'url-1080-HDR'?: string;
		'url-4K-SDR'?: string;
		'url-4K-HDR'?: string;
		'url-1080-H264'?: string;
	}

	export let videos: Video[];
	export let title: string;
	export let message: string;
	export let anchor: string;

	const videoFormats = [
		{ key: 'url-1080-SDR', label: '1080p SDR', class: 'variant-filled' },
		{ key: 'url-1080-HDR', label: '1080p Dolby Vision', class: 'variant-filled' },
		{ key: 'url-4K-SDR', label: '4K SDR', class: 'variant-filled' },
		{ key: 'url-4K-HDR', label: '4K Dolby Vision', class: 'variant-filled' },
		{ key: 'url-1080-H264', label: '1080p H.264', class: 'variant-filled-surface', addBreak: true }
	];
</script>

<div class="p-10 w-full mx-auto">
	<h1 class="mb-5 text-left h1" id={anchor}>{title}</h1>
	{#if message}
		<div class="card variant-ghost-warning p-4 mb-5 w-3/4">{@html message}</div>
	{/if}
	<div class="flex flex-wrap">
		{#each videos as video, index}
			<div class="card card-hover variant-soft w-80 overflow-hidden rounded-lg mr-5 mb-5">
				<header class="relative">
					<span class="badge absolute variant-filled-primary top-2 left-2 z-10">{index + 1}</span>
					<Lazy height={180} fadeOption={{ delay: 0, duration: 500 }}>
						<img
							width="320"
							height="180"
							src="thumbnails/{video.id}.webp"
							class="bg-black/50 w-full"
							alt={video.accessibilityLabel}
						/>
					</Lazy>
				</header>
				<div class="p-4 space-y-4">
					<h5 class="h5">{video.accessibilityLabel}</h5>
					{#each videoFormats as format}
						{#if video[format.key]}
							{#if format.addBreak}<br />{/if}
							<a class="btn btn-sm {format.class}" href={video[format.key]}>{format.label}</a>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
