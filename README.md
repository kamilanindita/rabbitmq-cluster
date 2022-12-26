

# rabbitmq-cluster
[The RabbitMQ cluster](https://www.rabbitmq.com/clustering.html) in this project is configured declaratively by listing cluster nodes in the config file.

Topology in this project

![Topology Rabbitmq Cluster](./topology.png?raw=true)

## Requirements
1. Docker
2. DockerDocker-Compose

## Dependencies
- node (for testing)
- amqplib (lib connection testing)
- rabbitmq:3-management (image)
- haproxy:1.7 (load balancer)

## Features/Services
- Load Balancer (default roundrobin)
- Rabbitmq1
- Rabbitmq2
- Rabbitmq3
- Ha Policy (High Availability with queue mirroring/replicas)

## Setup config `.env`
Copy file `.env.prod.example` to `.env.prod`

## Running the Cluster
```bash
$ docker-compose up -d
```
## Stop the Cluster
```bash
$ docker-compose down
```

## Testing
Start worker
```bash
$ node test/worker.js
```
Start task
```bash
$ node test/task.js
```