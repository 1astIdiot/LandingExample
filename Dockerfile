FROM alpine:3.11

RUN mkdir /var/www

ADD docker-entrypoint.sh /

COPY ./ /

ENTRYPOINT ["/docker-entrypoint.sh"]
