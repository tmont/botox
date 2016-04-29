#!/bin/bash

rm scrapers/resources/* scrapers/types/* scrapers/attributes/*
node scrapers/scrape-resources.js &
node scrapers/scrape-types.js &
node scrapers/scrape-attributes.js &
wait

rm src/gen/resources/* src/gen/types/* src/gen/attributes/*
node create-objects.js || exit 1

echo "finished in ${SECONDS}s"
