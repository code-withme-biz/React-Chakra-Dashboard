FROM node:16-alpine as build
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npm i -g pnpm && pnpm install
COPY . ./
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
