FROM node:16-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:dev"]