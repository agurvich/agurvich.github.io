#!/bin/bash

cp export-next.config.js next.config.js
npx next build
npx next export -o docs
> docs/.nojekyll
