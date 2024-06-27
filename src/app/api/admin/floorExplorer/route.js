// GET.js

import { query } from "@/utils/Dbconnect"; // Replace with correct path to your database module

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM floor_explorer WHERE id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.formData();
    const {
      heading,
      sub_heading,
      description,
      button,
      url,
      ply_image,
      tab_image,
      id // Assuming 'id' is passed to identify the record to update
    } = Object.fromEntries(requestData.entries());
    
    // console.log("Here is all the data", requestData);

    const sqlQuery = `
      UPDATE floor_explorer
      SET
        heading = COALESCE(?, heading),
        sub_heading = COALESCE(?, sub_heading),
        description = COALESCE(?, description),
        button = COALESCE(?, button),
        url = COALESCE(?, url),
        ply_image = COALESCE(?, ply_image),
        tab_image = COALESCE(?, tab_image)
      WHERE id = ?
    `;

    const values = [
      heading ?? null,
      sub_heading ?? null,
      description ?? null,
      button ?? null,
      url ?? null,
      ply_image ?? null,
      tab_image ?? null,
      id ?? null // Ensure id is not undefined
    ];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Floor explorer updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
