# Build stage
FROM node:20 as builder
WORKDIR /app

# Copiar código e instalar dependências
COPY package.json ./
RUN npm install
COPY . .
COPY .env.docker .env
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta para o Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]