<script lang="ts">
    import Lazy from 'svelte-lazy';

    export let assets: any[];
    export let title: string;
    export let anchor: string;
</script>

<div class="p-10 w-full mx-auto">
    <h1 class="mb-5 text-left" id="{anchor}">{title}</h1>
    <div class="flex flex-wrap">
        {#each assets as item, index}
        <div class="card variant-soft w-80 overflow-hidden rounded-lg mr-5 mb-5">
            <header>
                <Lazy height={180} fadeOption={{delay: 100, duration: 700}}>
                    <img src="thumbnails/{item.id}.webp" class="bg-black/50 w-full" alt="{item.accessibilityLabel}" />
                </Lazy>
            </header>
            <div class="p-4 space-y-4">
                <h5 class="">{index+1}. {item.accessibilityLabel}</h5>
                {#if item['url-1080-SDR'] != null}<a class="btn btn-sm variant-filled-secondary" href="{item['url-1080-SDR']}">1080p SDR</a>{/if}
                {#if item['url-1080-HDR'] != null}<a class="btn btn-sm variant-filled-secondary" href="{item['url-1080-HDR']}">1080p Dolby Vision</a>{/if}
                {#if item['url-4K-SDR'] != null}<a class="btn btn-sm variant-filled-secondary" href="{item['url-4K-SDR']}">4K SDR</a>{/if}
                {#if item['url-4K-HDR'] != null}<a class="btn btn-sm variant-filled-secondary" href="{item['url-4K-SDR']}">4K Dolby Vision</a>{/if}
                {#if item['url-1080-H264'] != null}<br /><a class="btn btn-sm variant-soft-secondary" href="{item['url-1080-H264']}">1080p H.264</a>{/if}
            </div>
        </div>
        {/each}
    </div>
</div>