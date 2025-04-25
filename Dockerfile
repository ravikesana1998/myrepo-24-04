# Stage 1: Build the Angular app
FROM node:18 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app to nginx html dir
COPY --from=builder /app/dist/test-app1 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
