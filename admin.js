import { kafka } from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("Connecting ...");
  admin.connect();
  console.log("Connected...");

  console.log("Topic is creating...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
        // replicaAssignment: [
        //   { partition: 0, replicas: [0, 1] },
        //   { partition: 1, replicas: [0, 1] },
        // ],
      },
    ],
  });
  console.log("Topic is created...");
  console.log("Disconnecting...");
  await admin.disconnect();
  console.log("Disconnected...");
}

init();
