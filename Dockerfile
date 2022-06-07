FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "index.js"]
# sudo docker build -t victory-ads-backend:dev
# sudo docker run -it -p 8081:8080 victory-ads-backend:dev