# Install node version
node version:16.16.0

# Install node_modules
RUN npm i

# Run source offline
RUN npm run start | npm run start:dev
