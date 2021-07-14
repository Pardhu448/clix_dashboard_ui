FROM node:9-alpine

WORKDIR /home/node/app
COPY entrypoint.sh ./
COPY .env.local .env.local
COPY --chown=node:node . . 

# Install the application's dependencies into the node_modules's cache directory.
RUN apk add --update git 
RUN npm install
RUN npm install -g serve
RUN npm run build

RUN chmod a+x entrypoint.sh

EXPOSE 3000

#CMD npm start
#CMD serve -s build -l 3000
ENTRYPOINT ["./entrypoint.sh"]

