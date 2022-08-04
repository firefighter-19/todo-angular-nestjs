FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build
EXPOSE 3050
CMD ["npm", "run", "start:dev"]