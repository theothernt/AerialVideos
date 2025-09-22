#!/bin/bash

# Activate virtual environment and run thumbnails script
cd "$(dirname "$0")/.."
source venv/bin/activate
cd scripts
python thumbnails.py