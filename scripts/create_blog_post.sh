#!/bin/bash

slugify () {
    echo "$@" | iconv -c -t ascii//TRANSLIT | sed -E 's/[~^]+//g' | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g' | tr A-Z a-z
}

relative_location=./../_posts/
filepath=$(cd "$(dirname "$relative_location")"; pwd)/blog-hexo/$(basename "$relative_location")
NOW=$(date +"%Y-%m-%d %H:%M:%S")
file_name=$(slugify "$@")
echo "Time: $NOW"
echo "Blog Title: $@"   
touch "$filepath/$file_name.md"

# Template
cat > "$filepath/$file_name.md" << EOF 
---
title: $@
date: $NOW
keywords:
level: Easy
description: 
---
EOF