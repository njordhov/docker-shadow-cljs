FROM clojure:tools-deps

MAINTAINER "terje@in-progress.com"

LABEL org.opencontainers.image.authors="Terje Norderhaug (njordhov)"
LABEL org.opencontainers.image.title="docker-shadow-cljs"
LABEL org.opencontainers.image.description="Dockerized shadow-cljs"
LABEL org.opencontainers.image.source="https://github.com/njordhov/docker-shadow-cljs"

RUN apt-get update 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_19.x | bash -
RUN apt-get install -y apt-utils
RUN apt-get autoremove -y
RUN apt-get install -y nodejs

RUN npm install -g shadow-cljs

WORKDIR /home
EXPOSE 9630
CMD ["server"]
ENTRYPOINT ["shadow-cljs"]
