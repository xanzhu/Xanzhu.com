FROM node:14.10.1-slim

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /Ailo/A1/
WORKDIR /Ailo/A1/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "production"]
