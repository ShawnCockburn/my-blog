# start dev environment

# check if .env file exists and ask to create one if not
if [ ! -f .env ]; then
    echo "No .env file found. Do you want to configure now? (y/n)"
    read -r answer
    if [ "$answer" = "y" ]; then
        cp .env.example .env
        echo "Created .env file"
    else
        echo "Please configure a .env file"
        exit 1
    fi
fi

# start dev environment

"$(pwd)/checkIfDockerIsOpen.sh" && DOCKER_BUILDKIT=1 docker-compose -f docker-compose-dev.yml up --build
