// GET.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM spaces WHERE id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
    try {
      const requestData = await request.json();
      const {
        commercial_images,
        residential_images,
        id // Assuming 'id' is passed to identify the record to update
      } = requestData;
      console.log("here is all the data",requestData)
  
      const sqlQuery = `
        UPDATE spaces
        SET
          commercial_images = COALESCE(?, commercial_images),
          residential_images = COALESCE(?, residential_images)
        WHERE id = ?
      `;
  
      const values = [
        commercial_images ?? null,
        residential_images ?? null,
        id 
      ];
  
      const result = await query({
        query: sqlQuery,
        values,
      });
  
      return new Response(JSON.stringify({ status: 200, message: "Spaces updated successfully", result }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }