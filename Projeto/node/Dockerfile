FROM node:latest
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node app.js .
EXPOSE 3000
CMD ["node", "app.js"]