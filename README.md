# SocketIO and REST API server Demo

This repo contains a demo SocketIO and REST API server. This project is part of a larger demo to show data flow in an IIoT Application.

## SocketIO

Load localhost:3000 and it will give you a chat window. It will connect to the server and will provide data via logger and console.

## REST ends

Send a GET request to http://localhost:3000/api with a JSON body and it should return a dummy data from a dummy service as well as log the data to the console.

# Docker

The Dockerfile can be used to bulid an image

```
docker build . -t sockerio_server
docker run -p 3000:3000 socketio_server
```

or 

```
docker-compose up
```

# Issues

- Chat terminal shows 'Connected' everytime the page is refreshed. SocketIO retains the messages or something?


# Author

- Indepreet Singh (ip_v1)
