#!/bin/bash

mysql_install_db --user=mysql
sleep 3
mysqld_safe &
sleep 3
mysql -e "create database webssh default charset=utf8mb4;"

