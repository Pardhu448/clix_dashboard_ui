#!/bin/sh
# this script is used to boot a Docker container
npm run build
serve -s build -l 3000
