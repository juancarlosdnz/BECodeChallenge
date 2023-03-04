FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

ENV MONGO_DB="BECodeChallenge"

EXPOSE 5005
EXPOSE 27017

CMD [ "npm", "start" ]