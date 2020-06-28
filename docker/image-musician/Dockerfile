FROM node:4.3.1

COPY src /opt/app

RUN apt-get update && apt-get install -y vim && apt-get install -y tcpdump

ENTRYPOINT ["node", "/opt/app/index.js"]