FROM node:alpine3.11 as build

WORKDIR /app

COPY . .

RUN npm install

FROM node:alpine3.11

COPY --from=build /app /