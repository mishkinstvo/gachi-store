FROM node:21-alpine
WORKDIR /app
COPY . /app/.
RUN npm install
RUN npm run build
RUN npm install -g @angular/cli

EXPOSE 4200
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
