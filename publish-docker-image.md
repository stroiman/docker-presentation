# Docker Registry

<small>Storage of docker _images_</small>

---

## Start a Registry

```
registry:
  restart: always
  image: registry:2
  ports:
    - 443:5000
    - 5000:5000
  environment:
    REGISTRY_HTTP_TLS_CERTIFICATE: /certs/fullchain.pem
    REGISTRY_HTTP_TLS_KEY: /certs/privkey.pem
    # REGISTRY_AUTH: htpasswd
    # REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
    # REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
  volumes:
    - /var/lib/registry:/var/lib/registry
    - ./certs:/certs
```

This is running on `registry.stroiman.com`
