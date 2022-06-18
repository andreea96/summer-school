FROM node:16-alpine3.14

ENV module 0
ENV topic "controllers"

# USER node 

WORKDIR /usr/src/app

COPY ./day3/module${module}-${topic}/package*.json ./

RUN npm install glob rimraf

RUN npm ci --only=development

RUN  npm i -g @nestjs/cli

ADD ./day3/module${module}-${topic}/ .

RUN npm run build
CMD [ "node", "dist/main.js" ] 

EXPOSE 3000

