import getClient from "./db";

async function updateTable(email : string){
    const client = await getClient();
    await client.connect();

    try {
        let res = await client.query(`update users
            set name = 'aryan' 
            where name = 'sumit'  
        `)
        console.log(res)
    }
    catch (error){
        console.log("error" + error)
    }

    await client.end();
}

updateTable("sumit@gmail.com");