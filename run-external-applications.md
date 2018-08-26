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

# Start a Jenkins server

```
$ docker run -p 8080:8080 jenkins/jenkins
```

https://hub.docker.com/r/jenkins/jenkins/

---

# Some useful images

- PostgreSQL <!-- .element: class="fragment" data-fragment-index="1" -->
- MySQL <!-- .element: class="fragment" data-fragment-index="1" -->
- MongoDB <!-- .element: class="fragment" data-fragment-index="1" -->
- AWS DynamoDB <!-- .element: class="fragment" data-fragment-index="1" -->
- SQL Server (for linux) <!-- .element: class="fragment" data-fragment-index="2" -->
- Kafka <!-- .element: class="fragment" data-fragment-index="3" -->
- RabbitMQ <!-- .element: class="fragment" data-fragment-index="3" -->
- Mailhog (testing mail sending) <!-- .element: class="fragment" data-fragment-index="4" -->
