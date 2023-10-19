FROM alpine:3.16.4  

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories  
RUN apk update && apk add nginx nodejs npm git --no-cache

COPY default.conf /etc/nginx/http.d/default.conf  
  
RUN git clone https://github.com/VANTERC/webssh.git  
WORKDIR /webssh/webssh_web  
RUN npm install && npm run build && \  
    rm -rf /var/lib/nginx/html/* && \  
    cp -a dist/* /var/lib/nginx/html/  
  
WORKDIR /webssh/webssh_api  
RUN npm install
  
EXPOSE 80  
EXPOSE 3306
EXPOSE 7001 
  
CMD ["nginx", "-g", "daemon off;"]  