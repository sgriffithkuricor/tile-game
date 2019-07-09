FROM node:alpine as builder

WORKDIR '/app'

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as tile-game-prod
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

# docker run -p 80:80 tile-game-prod