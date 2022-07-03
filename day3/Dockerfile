FROM node:16-alpine3.14

ENV module 0
ENV topic "controllers"

# USER node 

WORKDIR /usr/src/app

COPY ./module0-controllers/ ./

RUN  npm i -g @nestjs/cli

ADD . .

# RUN nest build
CMD [ "sleep", "infinity"] 

EXPOSE 3000

