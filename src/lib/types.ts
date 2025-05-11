export interface Video {
	id: string;
	accessibilityLabel: string;
	'url-1080-SDR'?: string;
	'url-1080-HDR'?: string;
	'url-4K-SDR'?: string;
	'url-4K-HDR'?: string;
	'url-1080-H264'?: string;
}

export interface Provider {
	videos: Video[];
	title: string;
	message: string;
	anchor: string;
}
