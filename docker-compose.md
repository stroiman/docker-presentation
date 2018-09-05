# docker-compose

<small>Easily setup a network of docker containers</small>

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

yaml fil-format.
Indeholder ikke noget, der ikke kunne laves med direkte `docker` kald.

---

# Start app with services

<div style="font-size: 0.75em">
<pre><code>version: "3"

services:
  app:
    image: node
    working_dir: /app
    volumes:
      - ".:/app"
    depends_on:
      - mailserver
    ports:
      - "9000:9000"
    environment:
      - "SMTP_HOST=mailserver"
      - "SMTP_PORT=1025"
    command: npm run start

  mailserver:
    image: mailhog/mailhog
    ports:
      - "8025:8025"</code></pre>
</div>
