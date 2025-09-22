from moviepy.video.io.VideoFileClip import VideoFileClip
from joblib import Parallel, delayed
import json
import glob
import os

THUMBNAILS_PATH = "../static/thumbnails"
JSON_PATH = "../src/lib"

def generate_thumbnails(filename):
    with open(filename, 'r') as f:
        videos = json.load(f)['assets']

    threads = os.cpu_count()
    # threads = 4
    print("Using " + str(threads) + " threads...")
    
    Parallel(n_jobs=threads)(delayed(render_image)(video) for video in  videos)
    
def render_image(video):
    clip = VideoFileClip(video['url-1080-SDR'])
    resized_clip = clip.resized(width=320)
    resized_clip.save_frame(f"{THUMBNAILS_PATH}/{video['id']}.webp", t=5)
    clip.close()
    print("Thumbnail created for: " + video['accessibilityLabel'])

# Make folder or clear all existing files
if not os.path.exists(THUMBNAILS_PATH):
    os.makedirs(THUMBNAILS_PATH)
else:
    files = glob.glob(f"{THUMBNAILS_PATH}/*")
    for f in files:
        os.remove(f)
    
generate_thumbnails(f"{JSON_PATH}/tvos15.json")
generate_thumbnails(f"{JSON_PATH}/comm1.json")
generate_thumbnails(f"{JSON_PATH}/comm2.json")
generate_thumbnails(f"{JSON_PATH}/fireos8.json")
