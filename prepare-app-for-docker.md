# Prepare for docker

<small>What should I take into account when packaging an my application as a
docker image</small>

* Follow the rules of the 12-factor app
* Inject configuration as environment variable
* Be aware of security issues in base images

Note:

It is possible to mount a configuration file - env vars are much better
