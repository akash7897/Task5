FROM node:20-alpine

ENV BACKEND_URL=http://host.docker.internal:5000

ADD . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "npm" ]

CMD ["run", "start"]

