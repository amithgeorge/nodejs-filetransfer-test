# nodejs-filetransfer-test

A simple app to test network download speeds between EU and South Africa. The Fly config deploys the application to Fly's Johannesburg location.

## Dependencies

[Jetify Devbox](https://www.jetify.com/docs/devbox/)

```shell
curl -fsSL https://get.jetify.com/devbox | bash
```

## Development

Enter the devbox shell

```shell
devbox shell
```

Start the web server

```shell
just dev-server
```

This will start a docker compose that should automatically sync files into the container, and rebuild the container when the package.json changes.

## Deploy

```shell
just deploy-server
```

## Curl Commands

```shell
curl "https://nodejs-filetransfer-test-server.fly.dev/documents?num100KBs=100" \
  --output amith_random_bytes.bin
```

This will download a binary file. `num100KBs` accepts values from 1 to 200. Meaning we can download a file from 100KB to ~ 20MB.

Downloading a 20MB file from within the Digital Ocean dev proxy server takes around 5s.