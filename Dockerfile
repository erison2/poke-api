FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN ls -al dist

EXPOSE 3000

# Command to run the app
#CMD ["npm", "run", "start:dev"]
CMD ["node", "dist/main"]