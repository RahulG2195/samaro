// api/admin/downloadCenter.js

import { query } from "@/utils/Dbconnect";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM download_center",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { dc_category, dc_type, imageName, pdfName } = requestData;
    const status = 1; // Default status
    console.log("here is dc data",requestData)

    const sqlQuery = `
      INSERT INTO download_center (dc_category, dc_type, image, pdf, status)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [dc_category, dc_type, imageName, pdfName, status];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "posted data successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(request) {
  try {
    const requestData = await request.json();
    const { dc_id, dc_category, dc_type, image, pdf } = requestData;

    const sqlQuery = `
      UPDATE download_center
      SET dc_category = ?, dc_type = ?, image = ?, pdf = ?
      WHERE dc_id = ?
    `;
    const values = [dc_category, dc_type, image, pdf, dc_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "dc updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { dc_id } = await request.json();

    const sqlQuery = `
      DELETE FROM download_center
      WHERE dc_id = ?
    `;
    const values = [dc_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "dc deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

