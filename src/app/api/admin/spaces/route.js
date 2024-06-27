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
    const formData = await request.formData();
    const requestData = Object.fromEntries(formData.entries());

    const commercial_images = requestData.commercial_images || null;
    const residential_images = requestData.residential_images || null;
    const id = 1;

    if (!id) {
      return new Response(JSON.stringify({ status: 400, message: "ID is required" }), { status: 400 });
    }

    const sqlQuery = `
        UPDATE spaces
        SET
          commercial_images = COALESCE(?, commercial_images),
          residential_images = COALESCE(?, residential_images)
        WHERE id = ?
      `;

    const values = [
      commercial_images,
      residential_images,
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
