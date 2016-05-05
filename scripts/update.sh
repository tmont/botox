#!/bin/bash

currentDir="$(dirname $(readlink -f "$0"))"
rootDir="$(dirname "${currentDir}")"
nodeModulesBin="${rootDir}/node_modules/.bin"
srcDir="${rootDir}/src"

rm "${currentDir}"/scrapers/{resources,types,attributes}/*

for script in resources types attributes; do
	node "${currentDir}"/scrapers/scrape-${script}.js &
done
wait

rm "${srcDir}"/gen/{resources,types,attributes}/*
node "${currentDir}"/create-objects.js || exit 1

"${currentDir}"/lint.sh
