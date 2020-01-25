# Gridsome Starter Blog

This is a minimal starter blog kit for markdown.

## Development
### Requirements
- Docker
- Docker-Compose

### Setup
```
git clone https://github.com/TakumaNakagame/www.penguin-labo.com
cd www.penguin-labo.com
docker-compose build
docker-compose run web yarn
```

### Running
```
docker-compose run --service-ports web gridsome develop --host 0.0.0.0
```
