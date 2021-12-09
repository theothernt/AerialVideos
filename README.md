# Aerial Videos

This is a fork of the [Aerial Wallpapers](https://github.com/Tawfiqh/aerialWallpapers) repo which lists all the aerial videos available from Apple.

I've made a few changes to support [the Android TV screensaver I maintain](https://github.com/theothernt/AerialViews)...

1. The generated site only lists tvOS 15 (only) videos as they are the latest version of all the videos
2. Removed unneeded Gatsby site and some other clutter

# Building it

Built it with the following command
```sh
./run.sh
```

The view the output
```sh
open index.html
```

Requires:
- FFMPEG (for thumbnail generation)
- python3
- cmark

(tested on macOS only)

# How it works
`run.sh` first calls `download_resources.sh` that uses curl to fetch the JSON lists of URLs.
_These were pulled from_

`parse_asset_lists.py` then parses this list.

It then outputs a markdown/html file of all of the files, titles, URLs, link to thumbnails.

Markdown is used as it's a little bit easier than crafting all of the HTML. But some divs are used in the markdown so that it's more easily styled with CSS and flexbox, padding, borders etc.

The markdown file is compiled into HTML. It then has an HTML header/footer appended to it. This footer references the CSS.

The final web-page is output as `index.html`.
