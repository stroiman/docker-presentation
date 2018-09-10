# Run external applications

* Start an application from a ready made docker image.
* Makes it easy to install all dependencies for you application.

---

# Starting a database server

https://hub.docker.com/_/mariadb/

```
docker run \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=foobar \
    -e MYSQL_DATABASE=our_application_database \
    mariadb
```


Notes:

Environment

---

# Testing an application with mail

https://hub.docker.com/r/mailhog/mailhog/

```
docker run -p 1025:1025 -p 8025:8025 mailhog/mailhog

```

---

# Execute a command in a running container

---

Take a backup of a database:

```
$ docker exec <container_id> mysqldump -pfoobar our_application_database > dump.sql
```

Restore a database:

```
$ docker exec -i mysql <container_id> -pfoobar our_application_database < dump.sql
```

---

# Some useful images

<ul>
<li class="fragment">Databases<br /><small>PostgreSQL, MySQL, Mariadb, MS Sql
Server (for Linux)</small></li>
<li class="fragment">Message queues
<br /><small>RabbitMQ, Kafka</small>
</li>
<li class="fragment">Cloud Services<br />
<small>Localstack (AWS Services), <a href="https://hub.docker.com/r/microsoft/azure-storage-emulator/">Azure Storage
Emulator</a>
</small>
<li class="fragment">Mail
</li>
</ul>
