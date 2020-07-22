FROM node:12.18.2-stretch
WORKDIR /workshop
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start"]