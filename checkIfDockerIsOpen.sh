#!/bin/bash

source "$(pwd)/spinner.sh"


# check if docker is running

docker info >/dev/null 2>&1
OPEN_DOCKER=$?

# detect if the os is macos or linux with $OSTYPE

if [[ $OPEN_DOCKER == 1 ]]; then

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
        echo "Mac OSX"
        echo

        # open the docker app
        open -a Docker --background --hide
        # wait for the docker app to be ready

        # echo 

        start_spinner "Waiting for Docker to launch, this could take up to 30 seconds..."

        I=0

        while (! docker stats --no-stream >/dev/null 2>&1); do
            # Docker takes a few seconds to initialize
            if [[ $I == 30 ]]; then
                stop_spinner $?
                echo 'Docker did not launch in 30 seconds, exiting...'
                exit 1
            fi
            # echo "."
            sleep 1
            I=$((I + 1))
        done

        stop_spinner $?
        echo "Docker is opened"

        sleep 2

    else

        # other os's
        echo "Not a supported OS, you must open docker maually"
        exit 1
    fi

else
    echo "Docker is running"
fi