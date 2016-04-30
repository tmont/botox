#!/bin/bash

rm scrapers/resources/* scrapers/types/* scrapers/attributes/*
node scrapers/scrape-resources.js &
node scrapers/scrape-types.js &
node scrapers/scrape-attributes.js &
wait

rm src/gen/resources/* src/gen/types/* src/gen/attributes/*
node create-objects.js || exit 1

errors=

echo "linting generated code..."
node_modules/.bin/eslint src/gen
if [ $? -ne 0 ]; then
	echo "LINT FAILED!"
	errors="lint"
else
	echo " yay!"
fi

echo "making sure there are no jsdoc errors..."
node_modules/.bin/jsdoc -X -r src > /dev/null
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

