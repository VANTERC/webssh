#!/bin/bash
openrc

touch /run/openrc/softlevel

/etc/init.d/mariadb setup 

rc-service mariadb start

mysql -e "create database webssh default charset=utf8mb4;"

nginx -g "daemon off;"