<script lang="ts">
	import apple from '#lib/tvos26.json';
	import comm1 from '#lib/comm1.json';
	import comm2 from '#lib/comm2.json';
	import fireos8 from '#lib/fireos8.json';
	import VideoList from '#components/VideoList.svelte';
	import { type Provider } from '#lib/types.js';

	const sslErrorMessage = `If you receive an SSL cert error, there are a couple of options...
	<ol class="list-decimal pt-2 pl-6">
	<li>
		Load this webpage in an Incognito window and the error won't occur
	</li>
	<li>
		Accept the error once, then navigate back to this page in your browser and continue with your downloads
	</li>
	</ol>`;

	const list: Provider[] = [
		{ videos: apple.assets, title: "Apple's tvOS 26 videos", message: sslErrorMessage, anchor: 'apple' },
		{ videos: comm1.assets, title: 'Videos by Jetson Creative', message: '', anchor: 'jetson-creative' },
		{ videos: comm2.assets, title: 'Videos by Robin Fourcade', message: '', anchor: 'robin-fourcade' },
		{ videos: fireos8.assets, title: 'Amazon Fire OS ambient videos', message: '', anchor: 'fireos-8' }
	];
</script>

<header class="sticky top-0 z-50 preset-tonal-surface shadow-sm">
	<div class="w-full mx-auto px-10 py-5 flex items-center justify-between">
		<h1 class="h3 m-0">Aerial Videos</h1>
		<span class="text-sm opacity-70"
			>For use with Aerial Views on Android TV (<a
				href="https://play.google.com/store/apps/details?id=com.neilturner.aerialviews"
				class="link"><strong>Play Store</strong></a
			>
			or <a href="https://github.com/theothernt/AerialViews" class="link"><strong>GitHub</strong></a>) and other
			video-based screensavers.</span
		>
	</div>
</header>

{#each list as { videos, title, message, anchor } (anchor)}
	<VideoList {videos} {title} {message} {anchor} />
{/each}
