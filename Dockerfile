FROM node:14.17.5-buster as build

WORKDIR /code

COPY package.json /code/package.json

RUN yarn install --prod

COPY . .

RUN yarn build 

#NGINX SERVER

FROM nginx:1.20.1 as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]