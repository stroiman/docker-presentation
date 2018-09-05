# Docker Commands

* `docker ps` - List current containers
* `docker stop` - Stop a running container
* `docker start` - Start a stopped container
* `docker create` - Create a new container
* `docker run` - Create and run a new container
* `docker rm` - Remove a container
* `docker cp` - Copy to/from container
* `docker exec` - Run a new command in a running container

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

note:

Sends a `SIGTERM` to the _main process_.
After 10 seconds, sends a `SIGKILL`.

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

Common options

```
--name <container-name>
-e <env variables>
-p <port mapping>
-v <volume mapping>
```

---

# `$ docker run`

`create` and `start` a container in one command

---

# Remove a container

```
docker rm <container name or container id>
```

Common options

```
docker rm -f # Remove a container even if it's started
```

Example: Remove all current containers

```
docker rm `docker ps -aq`
```

---

# Copy files to/from a container

Copy files between local machine and container

```
docker cp LOCAL_SRC_PATH <container name or id>:DEST_PATH
docker cp <container name or id>:SRC_PATH LOCAL_DEST_PATH
```

---

# Execute a command in a container

<small>E.g. inspecting the state of a container, create/restore database dumps</small>

```
docker exec [<options>] <container> <command>
```

Common options

```
docker exec -i # interactive, mount std in
docker exec -t # Attach pseudo-tty
```

Example


```
cat sqlbackup | docker exec -it mysql-container-name mysqldump
```

Note:

You almost always want `-it`
