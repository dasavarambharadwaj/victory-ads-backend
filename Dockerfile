FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "index.js"]
# sudo docker build -t victory-ads-backend:dev
# sudo docker run -it --add-host host.docker.internal:host-gateway -p 3001:3001 bharadwaj29/victory-ads-backend:latest


# sudo docker run -v /etc/letsencrypt/live/victoryads-srd.in/fullchain.pem:/etc/letsencrypt/live/victoryads-srd.in/fullchain.pem -v /etc/letsencrypt/live/victoryads-srd.in/privkey.pem:/etc/letsencrypt/live/victoryads-srd.in/privkey.pem --add-host host.docker.internal:host-gateway -it -p 3001:3001 bharadwaj29/victory-ads-backend