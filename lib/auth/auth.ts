import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { setServers } from "node:dns/promises";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db()

setServers(["1.1.1.1", "1.0.0.1"]);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
