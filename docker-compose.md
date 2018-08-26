# docker-compose

<small>Makes it simpler to configure docker containers</small>

```yaml
# docker-compose.yaml
version: "3"

services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

<div class="fragment">
<small>Start med</small>
<pre><code> $ docker-compose up </code></pre>
</div>

Note:

docker-compose commands are similar to docker

---

# Show processes handles by compose

Note:

yaml fil-format.
Indeholder ikke noget, der ikke kunne laves med direkte `docker` kald.
