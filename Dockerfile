# Stage 1: Build the Angular app
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the built Angular app from the builder stage to Nginx's default serving directory
COPY --from=builder /app/dist/test-app1 /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]