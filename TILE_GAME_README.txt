

# tile-game is based on react-webpack-babel-master 
# https://github.com/ReactJSResources/react-webpack-babel
$ diff -r tile-game react-webpack-babel-master
Only in tile-game: .travis.yml
Only in tile-game: Dockerfile
Only in tile-game: Dockerfile.dev
Only in tile-game: TILE_GAME_README.txt
Only in tile-game: coverage
Only in tile-game: node_modules
diff -r tile-game/package.json react-webpack-babel-master/package.json
82,83c82
<     ],
<     "testURL": "http://localhost/"
---
>     ]
Only in tile-game: scripts
diff -r tile-game/webpack.config.js react-webpack-babel-master/webpack.config.js
9c9
< const HOST = process.env.HOST || "0.0.0.0";
---
> const HOST = process.env.HOST || "127.0.0.1";

# DEVELOPER SCRIPTS
# running application
./scripts/dev/dev_build_and_run.sh
./scripts/dev/watch_and_run_tests.sh
./scripts/dev/prod_build_and_run.sh

# OPTIONAL DEVELOPER SETUP INFO
# Update SUBLIME to latest
# packages can be searched for here: https://packagecontrol.io/search/jsx
Sublime Text->Prefernces->Package Control->Packge Control: Install Package
   Babel by babel
   Dockerfile Syntax Highlighting by asbjornenge
# install watchman
brew install watchman  
# for hot reload of JSX and JS changes, use Chrome 

# dev is: http://localhost:8888
# prod is: http://localhost:80 or http://localhost
