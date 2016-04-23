#!/bin/bash

node scrapers/scrape-resources.js || exit 1
node scrapers/scrape-types.js || exit 1
node create-types.js || exit 1
node create-resources.js || exit 1
