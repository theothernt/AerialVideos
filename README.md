# Aerial Videos

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb8737f1-db81-4691-bf54-6ac426ded640/deploy-status)](https://app.netlify.com/sites/aerial-videos/deploys)

This project generates a simple website which lists all the videos from Apple, Jetson Creative, and Robin Fourcade.

You can then download the videos you like for use in the screensaver of your choice, for example...

- [Aerial Views for Android TV 📺](https://github.com/theothernt/AerialViews)
- [Aerial for macOS 🖥️](https://github.com/JohnCoates/Aerial)

This website is built and deployed using Netlify and can be viewed at [https://aerial-videos.netlify.app/](https://aerial-videos.netlify.app/)

## How to build the site

<details>
<summary>Generate thumbnail images</summary>

### Install python modules

Requires:

1. Python 3
2. Pip3

After installing [Python 3](https://www.python.org/downloads/) and [Pip3](https://pip.pypa.io/en/stable/installation/), install the required Python modules...

```sh
pip3 install moviepy
pip3 install joblib
```

### Macs with Apple silicon

MoviePy does not come with an FFMPEG binary for Apple silicon so you must install it manually.

There are many ways to do this but I use [Homebrew](https://brew.sh/), a package manager for macOS. Once Homebrew is installed, run this command to install FFMPEG...

```sh
brew install ffmpeg
```

If you have used Homebrew to also install Python 3, use [pipx](https://pipx.pypa.io/stable/) to install python packages as a virtual environment is used to keep the Apple provided version of Python separate from the Homebrew version.

When all required dependencies are installed, use the `generate_thumbnails.sh` script.

### Run the script

Run the Python script to generate the thumbnails...

```sh
cd scripts
python3 thumbnails.py
```

This will take a few minutes to complete depending on the speed of your Mac/PC and internet connection.

When finished, you should have a folder called `static/thumbnails` full of images.

</details>

<details>
<summary>Building the website</summary>

\
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

</details>
