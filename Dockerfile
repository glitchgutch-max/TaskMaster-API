FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production

COPY src ./src

EXPOSE 8080

# NOTE: intentionally left running as root (default) for the lab baseline.
# Remediation step should add a non-root USER directive.

CMD ["node", "src/server.js"]
