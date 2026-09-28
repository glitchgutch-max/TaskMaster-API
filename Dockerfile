FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production

COPY src ./src

# Hardening: run as the unprivileged built-in "node" user instead of root
RUN chown -R node:node /app
USER node

EXPOSE 8080

CMD ["node", "src/server.js"]
