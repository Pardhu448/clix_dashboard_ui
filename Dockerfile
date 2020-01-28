FROM node:9-alpine

WORKDIR /home/node/app
COPY --chown=node:node . . 

# Install the application's dependencies into the node_modules's cache directory.
RUN apk add --update git 
RUN npm install

EXPOSE 3000

CMD npm start


