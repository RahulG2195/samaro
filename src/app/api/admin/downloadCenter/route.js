import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM whysamaro_download_center",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.json();
    const { id, image_url, heading, description, button_text, button_url } = requestData;

    const sqlQuery = `
      UPDATE whysamaro_download_center
      SET
        image_url = ?,
        heading = ?,
        description = ?,
        button_text = ?,
        button_url = ?
      WHERE id = ?
    `;

    const values = [
      image_url || null,
      heading || null,
      description || null,
      button_text || null,
      button_url || null,
      id
    ];

    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 200, message: "Download center item updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
