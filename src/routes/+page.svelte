<script lang="ts">
	import apple from '$lib/tvos15.json';
	import comm1 from '$lib/comm1.json';
	import comm2 from '$lib/comm2.json';
	import VideoList from '$components/VideoList.svelte';

	let list: Provider[] = [];
	    
	list.push({videos: apple.assets, title: "Apple's tvOS 15 videos", anchor: "apple"})
	list.push({videos: comm1.assets, title: "Videos by Jetson Creative", anchor: "jetson-creative"})
	list.push({videos: comm2.assets, title: "Videos by Robin Fourcade", anchor: "robin-fourcade"})

</script>

{#each list as {videos, title, anchor}}
	<VideoList videos="{videos}" title="{title}" anchor="{anchor}" />
{/each}
