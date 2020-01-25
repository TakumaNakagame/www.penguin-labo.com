FROM node:11.7.0
WORKDIR /gridsome
RUN npm i gridsome@0.5.8 && \
    rm -rf ~/.npm && \
    ln -s /gridsome/node_modules/gridsome/bin/gridsome.js /usr/local/sbin/gridsome
WORKDIR /app

