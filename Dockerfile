# node builder
FROM node:20-alpine as builder

# Copy the source code to the container
COPY . /app

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Build the static files
RUN npm run build

# Specify the base image
FROM nginx:latest as production

# Copy the built static files to the nginx web root directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the nginx server
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
