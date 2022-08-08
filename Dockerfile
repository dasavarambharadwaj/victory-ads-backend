FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "index.js"]
# docker build -t bharadwaj29/victory-ads-ui:backend-1.0 .
# sudo docker run -it --add-host host.docker.internal:host-gateway -p 3001:3001 bharadwaj29/victory-ads-backend:latest


# sudo docker run -v /etc/letsencrypt/live/victoryads-srd.in/fullchain.pem:/etc/letsencrypt/live/victoryads-srd.in/fullchain.pem -v /etc/letsencrypt/live/victoryads-srd.in/privkey.pem:/etc/letsencrypt/live/victoryads-srd.in/privkey.pem --add-host host.docker.internal:host-gateway --restart=unless-stopped -it -p 3001:3001 bharadwaj29/victory-ads-backend