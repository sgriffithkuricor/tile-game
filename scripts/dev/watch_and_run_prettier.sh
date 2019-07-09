#!/bin/bash

BASEDIR=$(dirname "$0")
cd $BASEDIR/../..

docker run -v /app/node_modules -v $(pwd):/app  --entrypoint '/bin/sh' tile-game-dev -c 'npm run prettier'

while true
do
  echo "Watching ./src"
  watchman-wait ./src
  echo "changes detected, running prettier..."
  docker run -v /app/node_modules -v $(pwd):/app  --entrypoint '/bin/sh' tile-game-dev -c 'npm run prettier'
done
