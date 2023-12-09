FROM node:18 as builder
COPY . /
RUN npm install --global --force pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder ./dist/ /usr/share/nginx/html/