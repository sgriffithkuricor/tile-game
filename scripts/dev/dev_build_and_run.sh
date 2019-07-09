#!/bin/sh

BASEDIR=$(dirname "$0")
cd "watching $BASEDIR/../.."

docker build -f Dockerfile.dev -t tile-game-dev .

docker run -p 8888:8888 -v /app/node_modules -v $(pwd):/app -it tile-game-dev 

