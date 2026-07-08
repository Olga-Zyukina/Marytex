
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --global gulp-cli
RUN npm install

# COPY . .
COPY ./assets ./assets
COPY ./src ./src
COPY gulpfile.js ./
# CMD ["gulp", "build"]
RUN gulp build

FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./PHPMailer /usr/share/nginx/html/PHPMailer
COPY ./tmp /usr/share/nginx/html/tmp
COPY send.php /usr/share/nginx/html/send.php

COPY --chown=nginx:nginx --from=builder /app/index.html /usr/share/nginx/html/index.html
COPY --chown=nginx:nginx --from=builder /app/assets /usr/share/nginx/html/assets

EXPOSE 80

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]