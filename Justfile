default:
  just --list

deploy-server:
  fly deploy --config fly.server.toml
  just scale-server-to-1

scale-server-to-1:
  fly --config fly.server.toml scale count 1

dev-server:
  docker compose up --detach