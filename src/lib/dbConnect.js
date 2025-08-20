import { MongoClient, ServerApiVersion } from "mongodb"


export const collectionName={
    doctorCollection :"doctors"
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

return client.db("DiagnosticCenter").collection(collectionName)
}