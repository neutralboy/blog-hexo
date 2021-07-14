#!/bin/bash

slugify () {
    echo "$1" | iconv -c -t ascii//TRANSLIT | sed -E 's/[~^]+//g' | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g' | tr A-Z a-z
}

relative_location=./../_posts/
filepath=$(cd "$(dirname "$relative_location")"; pwd)/$(basename "$relative_location")
NOW=$(date +"%Y-%m-%d %H:%M:%S")
file_name=$(slugify "$1")
echo "Time: $NOW"
echo "Blog Title: $1"   
echo $filepath/$file_name

# Template
cat "$filepath/$file_name.md" <<EOF 
---
title: $1
date: $NOW
keywords:
level: Easy
description: 
---
EOF