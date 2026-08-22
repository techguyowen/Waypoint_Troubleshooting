# Use a lightweight Nginx image to serve static files
FROM nginx:alpine

# Copy all project files to the default Nginx public folder
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
