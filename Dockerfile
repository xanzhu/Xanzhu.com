FROM node:14.11.0-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install