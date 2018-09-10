# Prepare for docker

<small>What should I take into account when packaging an my application as a
docker image</small>

* Follow the rules of the <a href="https://12factor.net/">12-factor app</a>
* Inject configuration as environment variable
* Be aware of security issues in base images
* Consider running an "init process", e.g. <a href="https://engineeringblog.yelp.com/2016/01/dumb-init-an-init-for-docker.html">dumb-init</a>
* Avoid running as root

Note:

It is possible to mount a configuration file - env vars are much better
