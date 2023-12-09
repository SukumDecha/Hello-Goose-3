FROM node:18 as builder
COPY . /
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder ./dist/ /usr/share/nginx/html/
