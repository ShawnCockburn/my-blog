FROM node:14-alpine

COPY . .

RUN yarn

RUN yarn build

CMD ["node", "index.js" ]