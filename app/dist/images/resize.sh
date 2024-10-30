#!/bin/bash

width=1200
height=400
background=black
full_output=output.png
echo $1
#convert $1 -resize  ${width}x${height} -background ${background} -gravity center -extent ${width}x$((height)) ${full_output}
convert $1 -gravity center -crop ${width}x${height}+0+0  +repage ${full_output}