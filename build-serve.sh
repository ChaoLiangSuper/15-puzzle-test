#!/bin/bash

RED='\033[0;31m'
NC='\033[0m'

echo -e "\n${RED}Building Front End Production Code...............\n${NC}"
yarn build
echo -e "\n${RED}Building Front End Docker Image...............\n${NC}"
docker build . -t 15-puzzle
echo -e "\n${RED}Serving Production Build...............\n${NC}"
echo "The Production Build is serverd at localhost:4000, press [CTRL+C] to stop."
docker run -p 4000:80 15-puzzle
