# FROM node:latest as node

# COPY ./ ./

# RUN sed -i 's/"strict": true,/"strict": false,/g' tsconfig.json   

# RUN npm install -g npm@9.6.7

# RUN npm install
# RUN npm run build 


FROM nginx

RUN mkdir /app
 

WORKDIR /app
 
# COPY --from=node ./dist ./dist 
COPY ./dist ./dist

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf
 
# host pc 의 default.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d
# RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf 
# RUN sed -i 's/listen  \[::\]:80;/listen  \[::\]:8080;/g' /etc/nginx/conf.d/default.conf 
# RUN sed -i 's#root   /usr/share/nginx/html;#root   /app/dist;#g' /etc/nginx/conf.d/default.conf

# 8080 포트 오픈
EXPOSE 8080
 
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]

