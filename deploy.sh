#!/bin/sh
echo "Enter the commit message"
if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  git add dist && git commit -m "$1"
  git subtree push --prefix dist origin library-angular8--force
  exit 1
fi
