import getClient from "./db"

const query1 = `
	SELECT users.* , customers.customer_id , customers.customer_name , customers.address as my_address
    From users
    join customers on users.address = customers.customer_id;
`

async function getUsers(email:string){
    // start connection
    const client = await getClient();
    await client.connect();

    // get complete user table details 
    const res1 = await client.query(query1);
    console.log(res1);
    for(let user of res1.rows){
        console.log(`Id ${user.id} name: ${user.name} email: ${user.email} address: ${user.address}`)
    }

    // get user id where email is rakshit@gmail.com
    const res2 = await client.query(` SELECT id,name from users where email= ${email}; `);
    console.log(`${res2.rows[0].id} user : ${res2.rows[0].name}`)

    // end connection
    await client.end();
}

getUsers("rakshit@gmail.com");
