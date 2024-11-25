# Stage 1: Build stage
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json to leverage Docker's caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application (useful for frontend apps or transpiling)
# Uncomment the following line if needed for your project:
# RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

# Set the working directory for the production environment
WORKDIR /app

# Copy only the built files and dependencies from the builder stage
COPY --from=builder /app /app

# Expose the port your app runs on
EXPOSE 5000

# Define the command to start your application
CMD ["node", "index.js"]
