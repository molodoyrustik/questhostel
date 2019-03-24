FROM node:10.4.1-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build 

ENV PORT=5000
ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "express.js"]