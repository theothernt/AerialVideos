<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.css';
	
	let { children } = $props();
</script>

{@render children()}

