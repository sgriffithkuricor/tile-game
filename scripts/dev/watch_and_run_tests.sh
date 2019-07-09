#!/bin/bash

BASEDIR=$(dirname "$0")
cd $BASEDIR/../..

docker run -v /app/node_modules -v $(pwd):/app  --entrypoint '/bin/sh' tile-game-dev -c 'npm run test'

while true
do
  echo "Watching ./src"
  watchman-wait ./src
  echo "changes detected, running tests..."
  docker run -v /app/node_modules -v $(pwd):/app  --entrypoint '/bin/sh' tile-game-dev -c 'npm run test'
done
