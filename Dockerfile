FROM node:12

RUN mkdir -p /var/www/nuxt
WORKDIR /var/www/nuxt

ADD ./package*.json ./

RUN yarn install

ADD . ./

RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]