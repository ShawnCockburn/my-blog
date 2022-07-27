# Builder container
FROM node:14-alpine

WORKDIR /builder

COPY . .

RUN yarn

RUN yarn build

# Runner container
FROM node:14-alpine

WORKDIR /app

COPY --from=0 /builder/build ./build/

COPY --from=0 /builder/index.js ./index.js

RUN yarn add express

ENV port=3000

EXPOSE 3000:3000

CMD ["node", "index.js" ]