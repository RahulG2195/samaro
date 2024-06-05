import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module

export async function GET(request) {
  // const {}  = await request.json();

    try {
      const category = await query({
        query: "SELECT * FROM products ",
        values: [],
      });
  
      let data = JSON.stringify(category);
      return new Response(data, {
        status: 200,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          status: 500,
          message: error.message,
        })
      );
    }
  }


export async function POST(request) {
  try {
    const {id}  = await request.json();
    //  console.log("here is id bro",id) 
    
      const category = await query({
        query: "SELECT * FROM products where seo_url = ?",
        values: [id],
      });
  
      let data = JSON.stringify(category);
      return new Response(data, {
        status: 200,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          status: 500,
          message: error.message,
        })
      );
    }
  }