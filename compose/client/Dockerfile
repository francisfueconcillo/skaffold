FROM node:14

# Create app directory
WORKDIR /app
COPY ./src/client/. .

RUN npm install

EXPOSE 7777
CMD [ "node", "index.js" ]

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
