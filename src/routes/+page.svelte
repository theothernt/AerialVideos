<script lang="ts">
	import apple from '$lib/tvos15.json';
	import comm1 from '$lib/comm1.json';
	import comm2 from '$lib/comm2.json';
	import fireos8 from '$lib/fireos8.json';
	import VideoList from '$components/VideoList.svelte';
	import { type Provider } from '$lib/types';

	const sslErrorMessage = `If you receive an SSL cert error, there are a couple of options...
	<ul class="list-dl pt-2 pl-2">
	<li>
		1. Load this webpage in an Incognito window and the error won't occur
	</li>
	<li>
		2. Accept the error once, then navigate back to this page in your browser and continue with your downloads
	</li>
	</ul>`;

	const list: Provider[] = [
		{ videos: apple.assets, title: "Apple's tvOS 15 videos", message: sslErrorMessage, anchor: 'apple' },
		{ videos: comm1.assets, title: 'Videos by Jetson Creative', message: '', anchor: 'jetson-creative' },
		{ videos: comm2.assets, title: 'Videos by Robin Fourcade', message: '', anchor: 'robin-fourcade' },
		{ videos: fireos8.assets, title: 'Amazon Fire OS ambient videos', message: '', anchor: 'fireos-8' }
	];
</script>

{#each list as { videos, title, message, anchor } (anchor)}
	<VideoList {videos} {title} {message} {anchor} />
{/each}
