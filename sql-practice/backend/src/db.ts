
require('dotenv').config(); 
import { Client } from 'pg';
console.log("conn url : ",process.env.connection_url)

export default  async function getClient() {
    return new Client({
        connectionString: process.env.connection_url?.toString(),
        ssl: {
            rejectUnauthorized: false
        }
    });
}

