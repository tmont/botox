#!/bin/bash

rm scrapers/resources/* scrapers/types/*
node scrapers/scrape-resources.js &
node scrapers/scrape-types.js &
wait

rm src/gen/resources/* src/gen/types/*
node create-objects.js || exit 1

echo "finished in ${SECONDS}s"
