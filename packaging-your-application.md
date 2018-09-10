# Packaging your application

---

# Dockerfile

<small>Contains a recipe for building a docker image</small>

```
# base image to start from
FROM node

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 9000 # Inform our host that we are listening on port 9000

CMD ["npm", "run", "start"]
```

Build with

```
$ docker build .
```

---

# `.dockerignore`

Tells which parts we want to add to the application

```
# .dockerignore
# Don't add node modules, we will fetch them when building the image
node_modules
```

---

# Optimize docker file

- Each step must be carried out in full
- Try to avoid executing expensive steps unnecessarily

```
# base image to start from
FROM node

WORKDIR /app
COPY package.json /app
RUN npm install
# Now only changes to package.json will cause node modules
# to be reinstalled
COPY . /app

# Inform our host that we are listening on port 9000
EXPOSE 9000

CMD ["npm", "run", "start"]
```

---

# Create a name and _tag_

```
docker tag 6d53bbe34422 test-application
```

- Tags are overwritable
- Same image can have multiple tags
    - e.g. `app:latest`, `app:3`, `app:3.4`, `app:3.4.2`, `app:stable`
- Default tag is `latest`

---

# Entrypoint vs Command

- ENTRYPOINT is launched when running a command in an image
- CMD is an array of arguments passed to the ENTRYPOINT
- Default entrypoint is `sh -c`

---

# Interesting base images

- `empty` No base image, start from scratch
- `node` Node.js applications
- `ubuntu` Allows you to add a bunch of tools using `apt get` commands
