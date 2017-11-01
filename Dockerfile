FROM node:8.9
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./app
CMD node main.js
EXPOSE 80
