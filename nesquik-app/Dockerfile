FROM node:24-alpine 

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY src ./src
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]