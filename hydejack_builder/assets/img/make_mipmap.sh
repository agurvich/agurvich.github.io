#!/bin/bash

filename=`echo "${1%.*}"`
echo $filename
convert $1 -resize 50% -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB ${filename}_50.jpg
convert $1 -resize 25% -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB ${filename}_25.jpg
convert $1 -resize 12.5% -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB ${filename}_125.jpg
