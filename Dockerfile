FROM alpine:3.16.4

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk update && apk add nginx && apk add nodejs && apk add npm && apk add git && apk add mariadb mariadb-client && apk add openrc --no-cache
RUN rc-update add mariadb default


COPY default.conf /etc/nginx/http.d/default.conf

RUN git clone https://github.com/VANTERC/webssh.git
WORKDIR /webssh/webssh_web
RUN npm install && npm run build && \
    rm -rf /var/lib/nginx/html/* && \
    cp -a dist/* /var/lib/nginx/html/

# WORKDIR /webssh/webssh_api
# RUN npm install && npm run start

EXPOSE 80

# ADD ./bash.sh /bash.sh
# RUN chmod -R 775 /bash.sh
# CMD [ "./bash.sh" ]

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]