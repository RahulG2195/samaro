import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  try {
    const dbconnection = await mysql.createConnection({
      Host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT,
    });
    const [results] = await dbconnection.execute(query, values);
    // console.log("results: " + JSON.stringify(results));
    
    dbconnection.end();
    return results;
  } catch (error) {
    console.log("error in connecting Database: " + error);
    throw Error(error.message);
    return { error };
  }
}