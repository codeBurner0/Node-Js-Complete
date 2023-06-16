const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const database='NodeJs'

async function connect(){
    let result=await client.connect();
    let db=result.db(database);
    let collection= db.collection('Learning');
    return collection;
}

module.exports= connect;