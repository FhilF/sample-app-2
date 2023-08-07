FROM node:19-alpine

# Create app directory
WORKDIR /usr/src/app

#COPY <file-name> <src-path> <destination-path>
COPY package*.json .

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

CMD ["node", "index.js"]