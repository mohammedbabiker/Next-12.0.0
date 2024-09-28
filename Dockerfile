FROM node:22-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

ADD package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

ADD . .

RUN pnpm run build && pnpm run export

FROM nginx:stable-alpine AS production

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]