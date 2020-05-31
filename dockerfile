FROM node:latest

WORKDIR /src

COPY . .

CMD ["node","laboratorio5.js"]