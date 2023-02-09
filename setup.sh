#!/bin/bash
mysqld_safe &
cd /webssh/webssh_api && npm install && npm run start
nginx -g "daemon off;"
