# kafka-local-tutorial
## Description
This repository provides a comprehensive guide on setting up a local Kafka environment using Docker, Yarn, and Node.js (`kafkajs`). It includes detailed instructions for configuring Zookeeper, Kafka, and creating a basic Kafka setup with one producer, one topic named rider-updates with two partitions, and multiple consumer groups.

The project demonstrates the functionality through simple scripts (admin.js, producer.js, consumer.js) to manage topics and partitions, produce messages, and consume messages respectively. The tutorial aims to help beginners get hands-on experience with Kafka in a local development setup.

## About Kafka's Config
- One Producer
- One Topic `rider-updates`
- Two Partitions `0: NORTH and 1: SOUTH`
Note: You can create multiple `Consumer Groups` and in them you may create multple `consumers`

## Project Overview
- Admin (admin.js): Manages the setup of infrastructure, topics, and partitions in Kafka Server.
- Producer (producer.js): Produces messages to the Kafka topic rider-updates.
- Consumer (consumer.js): Consumes messages from the Kafka topic.


## Project Setup
1. Install Yarn, Node and Docker
2. Make a new directory and go inside it.
3. Initialise yarn: `yarn init` and press `Enter` multiple times.
4. Install kafkajs: `yarn add kafkajs`
5. Intall yarn and run: sudo yarn add
6. Start Zookeper Container and expose PORT 2181: `docker run -p 2181:2181 zookeeper`
7. Start Kafka Container, expose PORT 9092 and setup ENV variables. Replace `<PRIVATE_IP>` with your local machine's IP
```
docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```
8. Open two terminal tabs
- To make a consumer group, run `node consumer.js user-1` in one terminal
- To start producer, run `node producer.js` in other terminal
- Now, we have 1 Producer and 1 Consumer Group (or 1 consumer)

## Example Usage
In the producer terminal:
- Type `iron-man north` and press `Enter`, in consumer logs, you will see `user-1: [rider-updates]: PART: 0 {"name":"iron-man","location":"north"}`
- Type `iron-man south` and press `Enter`, in consumer logs, you will see `user-1: [rider-updates]: PART: 1 {"name":"iron-man","location":"south"}`
