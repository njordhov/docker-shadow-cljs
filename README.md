# Shadow CLJS with Docker

Develop [ClojureScript](https://clojurescript.org/) projects with [Shadow CLJS](https://shadow-cljs.github.io/docs/UsersGuide.html) without having to install Clojure, JVM, or npm on your local machine. The provided Docker image includes all the necessary dependencies for ClojureScript development.

- [x] [Reference project](shadow-cljs.edn) for shadow-cljs
- [x] [Dockerfile](Dockerfile) defining container for shadow-cljs
- [x] Docker [compose configuration](docker-compose.yml) to run commands
- [x] Release published at https://ghcr.io/njordhov/docker-shadow-cljs
- [ ] Support for Docker [Dev Environments](https://docs.docker.com/desktop/dev-environments/)

[![GitHub release](https://img.shields.io/github/release/njordhov/docker-shadow-cljs.svg)](https://GitHub.com/njordhov/docker-shadow-cljs/releases/)
[![Docker Shadow CLJS](https://github.com/njordhov/docker-shadow-cljs/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/njordhov/docker-shadow-cljs/actions/workflows/docker-publish.yml)

## Benefits

- Quickly and easily set up a Shadow CLJS based development environment
- Avoid having to install a build environment in your file system
- Lower the barrier for contributing to ClojureScript projects
- Ensure a consistent and predictable development environment
- Improve security by isolating the development environment from your system 
- Simplify cleanup after development by avoiding pollution of the host filesystem

You can provide any ClojureScript project with these benefits by copying the [docker-compose.yml](docker-compose.yml) configuration file into its repository.

## Prerequisites

[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://https://docker.com/)

[Docker](https://https://docker.com/) must be installed and running on your machine. Follow the instructions at [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/) to install Docker.

## Quick Start

Clone this repository and navigate to the directory.

Start a Shadow CLJS server in a Docker container:

```bash
docker compose run --rm shadow-cljs server
```

Wait for the server to start, then [open the Shadow CLJS monitor](http://localhost:9630/builds) in a web browser:

```bash
open http://localhost:9630/builds
```

From the monitor, you can compile the project, enable a watch process for live reloading of automatically compiled code changes, enable unit testing, and generate an executable release.

Stop the server from the [Docker Desktop](https://docs.docker.com/desktop/) application or by typing CTRL-d in the terminal.

## Usage

Get started with shadow-cljs in Docker by building the Docker image and starting a shadow-cljs development server. You can then use the server to build and run your ClojureScript projects, start a ClojureScript REPL, and more. The server can be configured to watch your code for changes and automatically rebuild your projects, making it easy to iterate and develop your code. Follow the steps below to get started.
 
### Pull the Docker Image

To pull the latest Docker image and alias it as `docker-shadow-cljs`, run the following commands:

```bash 
docker pull ghcr.io/njordhov/docker-shadow-cljs
docker image tag ghcr.io/njordhov/clariform docker-shadow-cljs
```

### Start the Server

To start the shadow-cljs development server, run the following command in a shell:

```bash
docker run --name server -it -v `pwd`:/home -p 9630:9630 -p 9090:9090 docker-shadow-cljs
```

This command will start a new Docker container named "server" and run the docker-shadow-cljs image. It maps ports from the container to the host machine, mounts the current working directory (pwd) to the /home directory in the container, and starts the container in interactive mode. Port 9090 provides an _nrepl_ interface that can be connected to from a REPL.

### Open the Shadow CLJS Monitor

Once the container is running, you can access the shadow-cljs monitor in your web browser at http://localhost:9630/builds. From the monitor, you can compile the project, enable a watch process for live reloading of automatically compiled code changes, run unit testing,
or generate an executable release.

Alternatively, execute these from the command line, as described in the following sections.

### Activate Live Reloading

Assuming the shadow-cljs configuration in the current directory has a build named `:script` with `:target :node-script` and `:output-to "script.js"`, you can execute the following command on the server to start a development process that watches for changes to your code and automatically rebuilds the `:script` build when changes are detected:

```bash
docker exec -it server shadow-cljs watch script
```

### Launch the Development Runtime

To run the compiled `:script` build, use the following command with the `:output-to`
pathname from _shadow-cljs.edn_:

```bash
docker exec -it server node out/script.js
```

### Start a ClojureScript REPL

To start a ClojureScript REPL for the `:script` build, use the following command:

```bash
docker exec -it server shadow-cljs cljs-repl script
```

### Open a Shell Prompt

To open a shell prompt in the running container, use the following command:

```bash
docker exec -it server sh
```

This will allow you to run other commands or inspect the container's filesystem.

### Run Shadow CLJS Commands in a Separate Container

Instead of executing shadow-cljs commands on the server container, you can alternatively run them in their own container. To do this, run the `docker-shadow-cljs` image with the shadow-cljs arguments at the end of the command line:

```bash
docker run -it --rm --network=host -v `pwd`:/home docker-shadow-cljs cljs-repl script
```

This command will start a new Docker container with the docker-shadow-cljs image and run the cljs-repl command for the :script build.

### Stopping and Removing the Server

Use the Docker Desktop software to stop the shadow-cljs development server and 
remove the Docker container. 

Alternatively, you can use the following commands:

```bash
# Stop the server
docker stop server

# Remove the container
docker rm server

# Remove the image
docker rmi docker-shadow-cljs
```

These commands will stop the "server" container, remove the "server" container and delete any data stored in the container, and remove the "docker-shadow-cljs" image and delete any data stored in the image.

## Using Docker Compose

Docker Compose runs containers defined in a configuration file. The `docker-compose.yml` file in this repository defines services for running shadow-cljs, and also encapsulates cache directories within the container to help keep the host filesystem clean and uncluttered. 

### Starting a Watcher

You can use Docker Compose to start a watcher that will automatically recompile your code whenever any files change. To do this, run the following command (with `-d` optionally to run it in the background):

```bash 
docker compose run --rm shadow-cljs watch script
```

Wait for the watcher to complete the initial build before proceeding. 

This will also automatically start a container for the Shadow CLJS server. To use the server, follow the steps in the Quick Start section to open the dashboard, start a development runtime, and execute commands.

### Run Commands

Compose can also run other shadow-cljs commands in their own container. 
For example, this will start a REPL:

```bash
docker compose run -it --rm shadow-cljs cljs-repl script
```

### Configuration

Docker compose uses the shadow-cljs.edn configuration file, which can be placed in the root directory of your project. You can edit this file to specify your project's requirements, build configurations, and other options.

For more information on how to use shadow-cljs, see the 
[shadow-cljs documentation](https://shadow-cljs.github.io/docs/UsersGuide.html).




