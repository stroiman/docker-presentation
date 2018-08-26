# Docker Commands

* `docker ps` - List current containers
* `docker stop` - Stop a running container
* `docker start` - Start a stopped container
* `docker create` - Create a new container
* `docker run` - Create and run a new container
* `docker rm` - Remove a container
* `docker cp` - Copy to/from container

---

# `$ docker ps`

List containers (by default lists only running containers)

```
docker ps
```

## Options

```
docker ps -a # Show stopped containers
docker ps -q # Just show the container id
```

---

# Stop a running container

```
docker stop <container name or id>
```

---

# Start a stopped container

```
docker start <container name or id>
```

---

# Create a new container

Creates a new container, but don't start it

```
$ docker create <options> IMAGE
```

Options

```
--name <container-name>
-e <env variables>
-p <port mapping>
```

---

# `$ docker run`

`create` and `start` a container in one command

---

# Remove a container

```
docker rm <container name or container id>
```

---

# Copy files to/from a container

Copy files from local machine to a container

```
docker cp SRC_PATH <container name or id>:DEST_PATH
```

Copy files from container to local machine
```
docker cp <container name or id>:SRC_PATH DEST_PATH
```

