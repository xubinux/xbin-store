# Name:     xbin-store-cloud-web-sso
# Time:     2017-05-07

FROM java:8-jdk

MAINTAINER Binux <xu.binux@gmail.com>

RUN mkdir /app

WORKDIR /app

COPY build/libs/xbin-store-web-sso.jar /app

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/xbin-store-web-sso.jar"]

EXPOSE 8104