# Volumes

* Share part of your local filesystem with a docker container.
* Allows us to keep state across container instances.

Example: Launch a <a href="https://hub.docker.com/_/jenkins/">Jenkins</a> server

```
docker run -p 8080:8080 -p 50000:50000 -v $(pwd)/jenkins_home:/var/jenkins_home jenkins
```


