# Traditional Build

- Previous example modified the build process
- The build was now coupled to docker
- We could still use _Makefile_ etc, and keep tooling in docker

---

# Example: go

```
# docker-compose.yaml
version: "3"

services:
  build:
    image: golang
    command: go build
    working_dir: /src
    volumes:
      - .:/src
      - .cache/go:/go
    environment:
      GOPATH: /go:/src
```

<small>Run with:</small>

```
$ docker-compose run build
```

<small class="fragment">⚠️  Beware: On linux, files have owner `root:root`</small>
<small class="fragment">⚠️  Beware: On non-linux, the executable won't run</small>

---

Add dependencies to support automated tests of data access and queueing code:

<div style="font-size: 0.5em">
<pre><code>version: "3"

services:
  build:
    working_dir: /src
    image: golang
    command: make
    volumes:
      - .:/src
      - .cache/go:/go
    depends_on:
      - queue
      - sql
    environment:
      GOPATH: /go:/src
      DB_URL: postgres://user:pass@sql/db_name
      AMQP_URP: amqp://guest:guest@queue/

  queue:
    image: rabbitmq:3-management

  sql:
    image: postgres
    environment:
      POSTGRES_USER: gossip
      POSTGRES_PASSWORD: gossip
      POSTGRES_DB: gossip
</div>
