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
    const requestData = await request.formData();
    const { dc_category, dc_type, imgurl, pdf, Badgetitle } = Object.fromEntries(
      requestData.entries()
    );
    const status = 1; 

    const sqlQuery = `
      INSERT INTO download_center (dc_category, dc_type, imgurl, pdf, Badgetitle, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    // Ensure imgurl and pdfName are replaced with null if they are empty
    const values = [
      dc_category || null,
      dc_type || null,
      imgurl || null,
      pdf || null,
      Badgetitle || null,
      status || null,
    ];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Posted data successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.json();
    const { dc_id, dc_category, dc_type, imgurl, pdf, Badgetitle } = requestData; // Updated to imgurl

    const sqlQuery = `
      UPDATE download_center
      SET dc_category = ?, dc_type = ?, imgurl = ?, pdf = ?, Badgetitle = ?
      WHERE dc_id = ?
    `;
    const values = [dc_category, dc_type, imgurl, pdf, Badgetitle, dc_id]; // Updated to imgurl

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "DC updated successfully", result }), { status: 200 });
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

    return new Response(JSON.stringify({ status: 200, message: "DC deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
