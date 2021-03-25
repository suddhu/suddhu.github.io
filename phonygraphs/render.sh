#!/bin/sh
jt -t grade3 -fs 95 -altp -tfs 11 -tf ebserif -nf ebserif -nfs 115 -cellw 70% -T # https://github.com/dunovank/jupyter-themes
jupyter nbconvert phonygraphs.ipynb --to html  --output "index" --no-input --no-prompt
