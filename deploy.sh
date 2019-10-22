#!/bin/sh

set -e

build_and_push()
{
  echo "Enter Commit Message : " 
    read commit
    echo "Cleaning"
    #rm -rf ../components-lib/lib/*
    cd ../components-lib/ && for i in `ls | grep -v ".git"` ; do rm -rf $i; done;
    echo "Building..."
    cd ../components/ && npm run build && sudo cp -r dist/* ../components-lib/
    cd ../components-lib/ && git add . && git commit -m "$commit" && git push -u origin master
    echo "Your Commit id is : "
    cat .git/refs/heads/master
}

if [ -d "../components-lib" ]; then
    build_and_push
else
    cd ../ && git clone https://github.com/townscript/components-lib.git && cd components
    build_and_push
fi

