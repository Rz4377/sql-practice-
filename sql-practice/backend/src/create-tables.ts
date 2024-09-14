
import getClient from "./db";

const client = getClient();

const query1 = `
    CREATE table customers(
    customer_id serial primary key,
    customer_name varchar(255),
    address varchar(255) unique
    );    
`
const query2 = `
    CREATE table users(
        id serial primary key,
        name varchar(255),
        email varchar(255) unique not null,
        address integer,
        foreign key (address) references customers(customer_id)
    );
`

async function createTables(){
    console.log("inside create tables fn")
    const conn = await getClient();
    try{
        await conn.connect();
    }
    catch(error){
        console.log(error + "error while connecting to db")
    }

    try{
        const res = await conn.query(query1)
        console.log("customers table created successfully")
        const res2 = await conn.query(query2)
        console.log("users table created successfully")
    }
    catch(error){
        console.log(error + "query issues")
    }
    finally{
        conn.end();
    }
}

createTables()