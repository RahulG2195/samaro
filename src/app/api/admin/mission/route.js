import { query } from "@/utils/Dbconnect";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM vision_mission WHERE id = 2", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const id = 2; // Assuming 'id' is hardcoded
    const requestData = await request.json();
    const { title, logo, subpoints } = requestData;

    console.log("Requested data for mission update: ", requestData);

    const sqlQuery = `
      UPDATE vision_mission
      SET title = ?, logo = ?, subpoints = ?
      WHERE id = ?
    `;

    const values = [
      title ?? null,
      logo ?? null,
      subpoints ?? null,
      id
    ];

    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 200, message: "Mission updated successfully" }), { status: 200 });
  } catch (error) {
    console.error('Error updating mission:', error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
