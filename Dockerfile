FROM node:14.11.0-slim

RUN mkdir -p /a1/ailo
WORKDIR /a1/ailo

ONBUILD RUN yarn