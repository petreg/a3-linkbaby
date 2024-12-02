# Build stage
FROM golang:1.23 as builder
WORKDIR /app

# Copiar o código e instalar dependências
COPY . .
RUN go build

# Runtime stage
FROM debian:bookworm-slim
WORKDIR /app
COPY --from=builder /app .

# Expor porta e rodar a aplicação
EXPOSE 8080
CMD ["./linkbaby"]