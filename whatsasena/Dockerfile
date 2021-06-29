FROM fusuf/thespy147:latest

RUN git clone https://github.com/XKeyScore147/thespy147 /root/thespy147
WORKDIR /root/thespy147/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
