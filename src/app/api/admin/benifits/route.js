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
    console.log("the requested data from siddhu ", request.json())
    try {
        const requestData = await request.json();
        const { id, heading, icons, titles, slider_images } = requestData;

        const sqlQuery = `
            UPDATE benefits
            SET
                heading = COALESCE(?, heading),
                icons = COALESCE(?, icons),
                titles = COALESCE(?, titles),
                slider_images = COALESCE(?, slider_images)
            WHERE id = ?
        `;

        const values = [
            heading ?? null,
            JSON.stringify(icons) ?? null,
            JSON.stringify(titles) ?? null,
            JSON.stringify(slider_images) ?? null,
            id
        ];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Benefits data updated successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}
