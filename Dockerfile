FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "index.js"]
# sudo docker build -t victory-ads-backend:dev
# sudo docker run -it --add-host host.docker.internal:host-gateway -p 3001:3001 bharadwaj29/victory-ads-backend:latest