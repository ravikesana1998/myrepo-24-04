# Stage 1: Build the Angular application
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application for production
RUN npm run build -- --configuration production --output-path dist

# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the build stage to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]