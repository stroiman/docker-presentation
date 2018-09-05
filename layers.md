# Layers

- Each image is composed of one or more _read only_ layers
- Each layer contains the only the differences from the next layer
- Multiple images can share layers (e.g. same base image)
- Starting a container creates a thin Read/Write layer

---

# Layers

<img src="sharing-layers.jpg" />
