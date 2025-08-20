import { MongoClient } from "mongodb"


export const collectionName={
    DiagnosticCenter : "DiagnosticCenter"
}

export default function dbConnect(collectionName){
    const uri =process.env.MONGODB_URI
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return client.db("doctors").collection(collectionName)
}