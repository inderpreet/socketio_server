FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY --chown=node:node . . 
EXPOSE 3000

CMD [ "node", "./src/index.js"]
