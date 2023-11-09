FROM node:18-alpine

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app