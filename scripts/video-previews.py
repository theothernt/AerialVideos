from moviepy.video.io.VideoFileClip import VideoFileClip
from moviepy.video.io.ffmpeg_writer import FFMPEG_VideoWriter
from moviepy.video.fx.resize import resize
from joblib import Parallel, delayed
import json
import glob
import os

PREVIEWS_PATH = "../static/previews"
JSON_PATH = "../src/lib"

def generate_previews(filename):
    with open(filename, 'r') as f:
        videos = json.load(f)['assets']

    #threads = os.cpu_count()
    threads = 4
    print("Using " + str(threads) + " threads...")
    
    Parallel(n_jobs=threads)(delayed(render_video)(video) for video in  videos)
        
def render_video(video):
    print("Creating video preview for: " + video['accessibilityLabel'])
    start_time = 5
    end_time = 15
    clip = VideoFileClip(video['url-1080-H264'])
    short_clip = clip.subclip(start_time, end_time)
    resized_clip = short_clip.fx(resize, width=320)
    resized_clip.write_videofile(f"{PREVIEWS_PATH}/{video['id']}.webm", codec='libvpx', preset='veryslow', write_logfile=False)
    clip.close()

# Make folder or clear all existing files
if not os.path.exists(PREVIEWS_PATH):
    os.makedirs(PREVIEWS_PATH)
else:
    files = glob.glob(f"{PREVIEWS_PATH}/*")
    for f in files:
        os.remove(f)

generate_previews(f"{JSON_PATH}/tvos15.json")
generate_previews(f"{JSON_PATH}/comm1.json")
generate_previews(f"{JSON_PATH}/comm2.json")
