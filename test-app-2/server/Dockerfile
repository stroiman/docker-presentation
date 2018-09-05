# base image to start from
FROM node

WORKDIR /app
COPY package*.json /app 
RUN npm install
COPY . /app

# Inform our host that we are listening on port 9000
EXPOSE 9000 

CMD ["npm", "run", "start"]
