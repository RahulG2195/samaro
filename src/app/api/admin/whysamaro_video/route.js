// GET.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const sqlQuery = `
      SELECT * FROM whysamaro_video 
    `;
    
    const results = await query({
      query: sqlQuery,
      values: [],
    });

    if (results.length === 0) {
      return new Response(JSON.stringify({ status: 404, message: "Video not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
// PUT.js


export async function PUT(request) {
  try {
    const id  = 1; // Assuming 'id' is passed in the request parameters
    const requestData = await request.formData();
    const {
      heading,
      description,
    //   logo_file,
      logo_filename,
    //   video_file,
      video_filename,
    } = Object.fromEntries(requestData.entries());

    const sqlQuery = `
      UPDATE whysamaro_video
      SET
        heading = COALESCE(?, heading),
        description = COALESCE(?, description),
        logo = COALESCE(?, logo),
        video = COALESCE(?, video)
      WHERE id = ?
    `;

    const values = [
      heading || null,
      description || null,
      logo_filename || null,
      video_filename || null,
      id
    ];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Video updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
