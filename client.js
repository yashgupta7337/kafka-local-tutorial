const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  brokers: ["10.103.20.4:9092"],
  clientId: "kafka-local-app",
});
