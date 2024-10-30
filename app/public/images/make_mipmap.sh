#!/bin/bash

convert $1 -resize 80% -sampling-factor 4:2:0  output.png
