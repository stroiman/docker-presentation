# Volumes

* Share part of your local filesystem with a docker container.
* Allows us to keep state across container instances.

Example:

```
docker run -it -v $(pwd)/data:/data ubuntu bash
```


