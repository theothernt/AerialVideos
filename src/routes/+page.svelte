<script lang="ts">
	import apple from '$lib/tvos15.json';
	import comm1 from '$lib/comm1.json';
	import comm2 from '$lib/comm2.json';
	import VideoList from '../components/VideoList.svelte';

	type Provider =  {assets: {}, title: string, anchor: string };
	let list: Provider[] = [];
	
	list.push({assets: apple.assets, title: "Apple's tvOS 15 videos", anchor: "apple"})
	list.push({assets: comm1.assets, title: "Videos by Jetson Creative", anchor: "jetson-creative"})
	list.push({assets: comm2.assets, title: "Videos by Robin Fourcade", anchor: "robin-fourcade"})

</script>

{#each list as {assets, title, anchor}}
	<VideoList assets="{assets}" title="{title}" anchor="{anchor}" />
{/each}
