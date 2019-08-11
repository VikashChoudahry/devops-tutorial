# use a node base image
FROM node:10.16.2

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8081 || exit 1

# tell docker what port to expose
EXPOSE 8081