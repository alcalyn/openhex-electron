#!/bin/bash

git clone https://github.com/alcalyn/openhex.git && cd openhex || cd openhex && git pull
npm install && npm run build-local
