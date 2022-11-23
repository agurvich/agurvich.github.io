#!/bin/bash

filename=`echo "${1%.*}"`
full_output=bkg_${filename}.png
width=1000
height=195
background=white
background=transparent

convert $1 -resize  ${width}x${height} -background ${background} -gravity north -extent ${width}x$((height+5)) ${full_output}
convert ${full_output} -crop ${width}x${height} -background ${background} -flatten ${full_output}

convert ${full_output} -resize 50% -sampling-factor 4:2:0  bkg_${filename}_50.png
convert ${full_output} -resize 25% -sampling-factor 4:2:0 bkg_${filename}_25.png
convert ${full_output} -resize 12.5% -sampling-factor 4:2:0 bkg_${filename}_125.png
