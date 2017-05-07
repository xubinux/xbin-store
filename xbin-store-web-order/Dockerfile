# Name:     xbin-store-cloud-web-orader
# Time:     2017-05-07

FROM java:8-jdk

MAINTAINER Binux <xu.binux@gmail.com>

RUN mkdir /app

WORKDIR /app

COPY build/libs/xbin-store-web-orader.jar /app

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/xbin-store-web-orader.jar"]

EXPOSE 8107