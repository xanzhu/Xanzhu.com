FROM node:14.10.1-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install