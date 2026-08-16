FROM node:20-alpine as builder
WORKDIR /myapp
COPY package*.json ./
RUN npm install
COPY . .

FROM builder as final
WORKDIR /myapp
USER node
COPY --from=builder --chown=node:node /myapp ./
CMD ["npm","start"]
