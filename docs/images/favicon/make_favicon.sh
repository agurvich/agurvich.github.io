#!/bin/bash

filename=`echo "${1%.*}"`
full_output=${filename}.png

convert ${full_output} -resize 192x192 apple-touch-icon.png # 192x192
convert ${full_output} -resize 144x144 apple-touch-icon-144x144.png
convert ${full_output} -resize 72x72 apple-touch-icon-72x72.png 
convert ${full_output} -resize 16x16 favicon.ico # 16x16
