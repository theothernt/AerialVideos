<script lang="ts">
	import Lazy from 'svelte-lazy';

	export let videos: any;
	export let title: string;
	export let anchor: string;
</script>

<div class="p-10 w-full mx-auto">
	<h1 class="mb-5 text-left" id={anchor}>{title}</h1>
	<div class="flex flex-wrap">
		{#each videos as video, index}
			<div class="card card-hover variant-soft w-80 overflow-hidden rounded-lg mr-5 mb-5">
				<header class="relative">
					<span class="badge absolute variant-filled-secondary top-2 left-2 z-10">{index + 1}</span>
					<Lazy height={180}>
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
					<h5>{video.accessibilityLabel}</h5>
					{#if video['url-1080-SDR'] != null}<a class="btn btn-sm variant-filled-secondary" href={video['url-1080-SDR']}
							>1080p SDR</a
						>{/if}
					{#if video['url-1080-HDR'] != null}<a class="btn btn-sm variant-filled-secondary" href={video['url-1080-HDR']}
							>1080p Dolby Vision</a
						>{/if}
					{#if video['url-4K-SDR'] != null}<a class="btn btn-sm variant-filled-secondary" href={video['url-4K-SDR']}
							>4K SDR</a
						>{/if}
					{#if video['url-4K-HDR'] != null}<a class="btn btn-sm variant-filled-secondary" href={video['url-4K-HDR']}
							>4K Dolby Vision</a
						>{/if}
					{#if video['url-1080-H264'] != null}<br /><a
							class="btn btn-sm variant-soft-secondary"
							href={video['url-1080-H264']}>1080p H.264</a
						>{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
