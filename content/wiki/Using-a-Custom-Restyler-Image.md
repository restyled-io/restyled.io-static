Restyled can use any publicly `docker-pull`-able image for a Restyler. This means you can build and host custom images for your project to use. This can be a great way to test changes you intend to submit upstream, or work around any limitations in functionality.

For example, if you require a 3rd party package that we can't install in our image:

```dockerfile
FROM restyled/restyler-prettier:v2.8.7-1  # start with our image
RUN cd /app && npm install @foo/bar       # add whatever you need
```

```console
docker build --tag myco/prettier-restyler:v1 .
docker push myco/prettier-restyler:v1
```

```yaml
restylers:
  - prettier:
      image: myco/prettier-restyler:v1
  - "*"
```