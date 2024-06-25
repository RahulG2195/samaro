// api/admin/dimensions.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM dimensions",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(request) {
    try {
      const requestData = await request.json();
      const {
        id,
        plank_sizes_heading,
        plank_sizes_description,
        plank_sizes_image,
        plank_thickness_heading,
        plank_thickness_description,
        plank_thickness_main_image_url,
        plank_thickness_image_1,
        plank_thickness_size_range_1,
        plank_thickness_image_2,
        plank_thickness_size_range_2,
        plank_thickness_image_3,
        plank_thickness_size_range_3,
      } = requestData;

      console.log("dimensionsss",requestData)
  
      const sqlQuery = `
        UPDATE dimensions
        SET
          plank_sizes_heading = ?,
          plank_sizes_description = ?,
          plank_sizes_image_url = ?,
          plank_thickness_heading = ?,
          plank_thickness_description = ?,
          plank_thickness_main_image_url = ?,
          plank_thickness_image_1_url = ?,
          plank_thickness_size_range_1 = ?,
          plank_thickness_image_2_url = ?,
          plank_thickness_size_range_2 = ?,
          plank_thickness_image_3_url = ?,
          plank_thickness_size_range_3 = ?
        WHERE id = ?
      `;
  
      const values = [
        plank_sizes_heading || null,
        plank_sizes_description || null,
        plank_sizes_image || null,
        plank_thickness_heading || null,
        plank_thickness_description || null,
        plank_thickness_main_image_url || null,
        plank_thickness_image_1 || null,
        plank_thickness_size_range_1 || null,
        plank_thickness_image_2 || null,
        plank_thickness_size_range_2 || null,
        plank_thickness_image_3 || null,
        plank_thickness_size_range_3 || null,
        id,
      ];
  
      await query({ query: sqlQuery, values });
  
      return new Response(JSON.stringify({ status: 200, message: "Dimensions updated successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }