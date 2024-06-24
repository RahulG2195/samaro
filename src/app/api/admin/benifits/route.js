import { query } from "@/utils/Dbconnect"; // Adjust path to your database module
import { json } from "react-router-dom";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM benefits", // Adjust query as needed
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// PUT endpoint to update benefits
export async function PUT(request) {
  try {
      const requestData = await request.json();
      const { id, heading, icons, titles, slider_images } = requestData;

      // Log the received request data for debugging
      console.log("Received request data:", requestData);

      // Prepare the SQL query
      const sqlQuery = `
          UPDATE benefits
          SET
              heading = COALESCE(?, heading),
              icons = COALESCE(?, icons),
              titles = COALESCE(?, titles),
              slider_images = COALESCE(?, slider_images)
          WHERE id = ?
      `;

      // Prepare the values for the SQL query
      const values = [
          heading || null,
          icons || null,
          titles || null,
          slider_images || null,
          id
      ];

      // Execute the SQL query
      const result = await query({
          query: sqlQuery,
          values,
      });

      // Respond with success message and result
      return new Response(JSON.stringify({ status: 200, message: "Benefits data updated successfully", result }), { status: 200 });
  } catch (error) {
      // Log the error for debugging
      console.error("Error updating benefits data:", error);

      // Respond with error message
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
