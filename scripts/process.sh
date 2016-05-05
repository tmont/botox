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

errors=

echo "linting generated code..."
"${nodeModulesBin}"/eslint "${srcDir}"/gen
if [ $? -ne 0 ]; then
	echo "LINT FAILED!"
	errors="lint"
else
	echo " yay!"
fi

echo "making sure there are no jsdoc errors..."
"${nodeModulesBin}"/jsdoc -X -r "${srcDir}" > /dev/null
if [ $? -ne 0 ]; then
	echo "JSDOC FAILED!"
	errors="${errors} jsdoc"
else
	echo " yay!"
fi

echo "finished in ${SECONDS}s"

if [ -n "${errors}" ]; then
	echo "there were some errors, please investigate: ${errors}"
	exit 1
fi
