# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 4000

# Set environment variable
ENV NODE_ENV=production

# Start the app using npm
CMD ["npm", "start"]