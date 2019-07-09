#!/bin/bash

BASEDIR=$(dirname "$0")
cd $BASEDIR/../..

docker build -t tile-game-prod .

docker run -p 80:80 -it tile-game-prod 
