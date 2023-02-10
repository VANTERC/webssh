FROM centos:7
# please use docker build -t webssh . --platform linux/amd64
# docker tag 6b1cb3376aff vanterc/webssh:latest
RUN curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum -y install nodejs
RUN yum -y install git
RUN yum -y install wget

RUN yum install -y mariadb-server
ADD db_init.sh /root/db_init.sh
RUN chmod 775 /root/db_init.sh
RUN /root/db_init.sh


RUN yum install -y gcc gcc-c++ make \
    openssl-devel pcre-devel gd-devel \
    iproute net-tools telnet wget curl && \
    yum clean all && \
    rm -rf /var/cache/yum/*
RUN wget http://nginx.org/download/nginx-1.22.1.tar.gz && \
    tar zxf nginx-1.22.1.tar.gz && \
    cd nginx-1.22.1 &&\
    ./configure --prefix=/usr/local/nginx \
    --with-http_ssl_module \
    --with-http_stub_status_module && \
    make -j 4 && make install && \
    cd / && rm -rf nginx-1.22.1* && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
 
ENV PATH $PATH:/usr/local/nginx/sbin

RUN git clone https://github.com/VANTERC/webssh.git

WORKDIR /webssh/webssh_web

RUN npm install && npm run build && \
    rm -rf /usr/local/nginx/html/* && \
    cp -a dist/* /usr/local/nginx/html/

EXPOSE 80
EXPOSE 7001

ADD setup.sh /root/setup.sh
RUN chmod 775 /root/setup.sh

CMD [ "/root/setup.sh" ]