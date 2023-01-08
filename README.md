# Shadow CLJS in Docker

Run [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html) with Docker.

This repo contains a Docker image for running a shadow-cljs dev server and commands. The only prerequisite is Docker, with no need to install npm, JVM, or Clojure.

The docker-shadow-cljs image for Docker provides a convenient and consistent way to run shadow-cljs without having to install npm, the Java Virtual Machine (JVM), or Clojure on your local machine. The only prerequisite is Docker, with no need to install npm, JVM, or Clojure. All of the requirements are packaged inside the Docker container, making it it easy to run shadow-cljs in any environment that supports Docker.

## Prerequisites

[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://https://docker.com/)

[Docker](https://https://docker.com/) must be [installed](https://docs.docker.com/engine/install/) and running.

## Quick Start

The Dockerfile can be used to start a shadow-cljs development server and run various shadow-cljs commands. You can use the server to build and run your ClojureScript projects, start a ClojureScript REPL, and more. The server can be configured to watch your code for changes and automatically rebuild your projects, making it easy to iterate and develop your code.
 
### Prebuilding Image

Prebuild the Docker image and alias it as `docker-shadow-cljs`. To do this, run the following command:

```
docker build -t docker-shadow-cljs .
```

### Start a Server

Run the following command in a shell to start the server:

```
docker run --name server -it --rm -v `pwd`:/home -p 9630:9630 -p 9090:9090 docker-shadow-cljs
```

This will start a new Docker container named "server" and run the `docker-shadow-cljs` image. It maps ports 9630 and 9090 from the container to the host machine, mounts the current working directory (`pwd`) to the `/home` directory in the container, and starts the container in interactive mode.

### Open the Dashboard

Once the container is running, you can open the shadow-cljs dashboard in your web browser:

http://localhost:9630/dashboard.

From the browser dashboard you can compile the project, enable a watch process for 
live reloading of automatically compiled code changes, and run unit testing.

### Executing Commands

Assuming the shadow-cljs configuration in the current directory has a build named `:script` with `:target :node-script` and `:output-to "script.js"`, here are some examples of commands you can execute on the server:

```
docker exec -it server shadow-cljs watch script
```

This will start a development process that watches for changes to your code and automatically rebuilds the _script_ build when changes are detected.

### Launch Development Runtime

To run the compiled _script_ build, use the following command:

```
docker exec -it server node out/script.js
```

### Start a REPL

To start a ClojureScript REPL for the `script` build, use the following command:

```
docker exec -it server shadow-cljs cljs-repl script
```

### Open a Shell

To open a shell prompt in the running container, use the following command:

```
docker exec -it server sh
```

This allows you to run other commands or inspect the container's filesystem.

### Running Commands in a Separate Container

Instead of executing shadow-cljs commands on the server container, you can alternatively run them in their own container. To do this, run the `docker-shadow-cljs` image with the shadow-cljs arguments at the end of the command line:

```
docker run -it --rm --network=host -v `pwd`:/home docker-shadow-cljs cljs-repl script
```

This will start a new Docker container with the `docker-shadow-cljs` image and run the `cljs-repl` command for the `script` build.

## Using Docker Compose 

Docker Compose runs predefined services, lowering the barrier to contribute to
a projects. The `docker-compose.yml` file configures
services to run shadow-cljs. It encapsulates cache directories in the container to
ease cleanup and avoid polluting the host filesystem.

### Starting a Watcher

To start a watcher with compose, which will recompile whenever any code files change, use the 
following command (with `-d` optionally to run it in the background):

```
docker compose run --rm shadow-cljs watch script
```

Wait until the watcher has completed the build before proceeding.
It automatically starts a container for the Shadow CLJS server.
Follow the steps from Quick Start to open the dashboard, start 
a development runtime and execute commands on the server.

### Run Commands

Compose can also run other shadow-cljs commands in their own container. 
For example, this will start a REPL:

```
docker compose run -it --rm shadow-cljs cljs-repl script
```



