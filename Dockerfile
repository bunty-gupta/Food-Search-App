FROM node:latest as base
ADD . /app
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org/
RUN npm install -g npm@latest
RUN npm install
RUN npm rebuild node-sass
RUN chmod a+x  /app/node_modules/.bin/react-scripts
RUN npm run prod
FROM nginx:alpine
EXPOSE 3000
RUN rm /etc/nginx/nginx.conf
COPY --from=base /app/nginx.conf /etc/nginx
COPY --from=base /app/build /app/bootstrap.sh /app/
RUN mkdir -p /app/conf
RUN ["chmod", "+x", "/app/bootstrap.sh"]    
CMD "/app/bootstrap.sh"