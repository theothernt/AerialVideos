# Aerial Videos

This project generates a simple website which lists all the videos from Apple, Jetson Creative, and Robin Fourcade.

You can then download the videos you like for use in the screensaver of your choice - such as [Aerial Views for Android TV](https://github.com/theothernt/AerialViews).

## Generate the video thumbnails

Requires:

1. Python 3
2. Pip3

\
Install the required Python modules...

```sh
pip3 install moviepy
pip3 install joblib
```

### Macs with Apple silicon

MoviePy does not come with an FFMPEG binary for Apple silicon so you must install it manually.

There are many ways to do this but I use Homebrew, a package manager for macOS. Once Homebrew is installed, run this command to install FFMPEG...

```sh
brew install ffmpeg
```

\
Run the Python script to generate the thumbnails...

```sh
cd scripts
python3 thumbnails.py
```

This will take a few minutes to complete depending on the speed of your Mac/PC and internet connection.

When finished, you should have a folder called `static/thumbnails` full of images.

## Building the website

Requires:

1. NodeJS
2. Npm
3. SveleteKit
4. Pnpm (optional)

\
Install all the required dependencies...

```sh
npm install (or pnpm i)
```

\
To run the development version...

```sh
npm run dev -- --open (or pnpm dev --open)
```

\
To build the site for deployment...

```sh
npm run build (or pnpm build)
```
