// admin creates topics
const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  console.log("Creating Topic [rider-updates]...");
  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic [rider-updates] Created Success...");

  console.log("Disconnecting Admin...");
  await admin.disconnect();
}

init();