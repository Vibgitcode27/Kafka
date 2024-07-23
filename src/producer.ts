import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "quickstart-events",
    messages: [{ value: "Hello KafkaJS user hasldasldlas!" }],
  });
};

run().catch(console.error);
