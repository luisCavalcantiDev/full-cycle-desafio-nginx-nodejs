FROM nginx:1.15.0-alpine

WORKDIR /app

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80