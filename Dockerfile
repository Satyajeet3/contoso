FROM node:7
WORKDIR /app
RUN npm install
CMD node server.js
EXPOSE 8081