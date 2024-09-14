import getClient from "./db";

const client = getClient();

// query 0
const query0 = `INSERT INTO customers(customer_name, address) values($1,$2)`;
const value0 = ["rakesh","surajmal vihar"];
const value01 = ["raman","krishna nagar"];

// query 1
const query1 = `
    INSERT into users(name ,email,address) values('rakshit','rakshit@gmail.com',1);  
`
// query 2
const query2 = `
    INSERT into users(name,email,address) values($1,$2,$3);
`
const values2 = ["sumit","sumit@gmail.com",2];

// insert table queries
async function insertIntoTables(){
    console.log("inside create tables fn")
    const conn = await getClient();
    try{
        await conn.connect();
    }
    catch(error){
        console.log(error + "error while connecting to db")
    }

    try{
        await conn.query(query0,value0);
        console.log("query0 completed")
        await conn.query(query0,value01);
        console.log("query01 completed")
        await conn.query(query1)
        console.log("query1 completed")
        await conn.query(query2,values2)
        console.log("query2 completed")
    }
    catch(error){
        console.log(error + "query issues")
    }
    finally{
        conn.end();
    }
}

insertIntoTables()