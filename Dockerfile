FROM node:14.10.1-slim

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /Ailo/A1/
WORKDIR /Ailo/A1/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "buildProd"]

# ###################################################

# FROM node:14.10.1-slim as Ailo_Developer

# # Install node modules
# RUN yarn global add nodemon

# # Create app directory
# RUN mkdir -p /Developer/A1/
# WORKDIR /Developer/A1/

# ONBUILD RUN yarn install

# ENV HOST 0.0.0.0
# # Install app dependencies
# CMD [ "yarn", "production"]

# ###################################################

# FROM nginx:1.19.2 as Ailo_Nginx

# RUN ln -sf /dev/stdout /var/log/nginx/access.log \
# 	&& ln -sf /dev/stderr /var/log/nginx/error.log

# ADD start.sh /start.sh
# RUN chmod 777 /start.sh
# RUN mkdir /config

# RUN mkdir /logs
# RUN chmod -R 777 /logs

# EXPOSE 443

# ENTRYPOINT ["./start.sh"]

# ##################################################