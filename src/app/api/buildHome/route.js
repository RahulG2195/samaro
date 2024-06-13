
import { query } from "@/utils/Dbconnect"; // Adjust path to your database module

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM build_home ", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}



export async function PUT(request) {
  try {
    const requestData = await request.json();
    const {
      heading,
      description,
      feature1_icon,
      feature1_title,
      feature2_icon,
      feature2_title,
      feature3_icon,
      feature3_title,
    } = requestData;

    const sqlQuery = `
      UPDATE build_home
      SET
        heading = COALESCE(?, heading),
        description = COALESCE(?, description),
        feature1_icon = COALESCE(?, feature1_icon),
        feature1_title = COALESCE(?, feature1_title),
        feature2_icon = COALESCE(?, feature2_icon),
        feature2_title = COALESCE(?, feature2_title),
        feature3_icon = COALESCE(?, feature3_icon),
        feature3_title = COALESCE(?, feature3_title)
      WHERE id = 1
    `;

    const values = [
      heading ?? null,
      description ?? null,
      feature1_icon ?? null,
      feature1_title ?? null,
      feature2_icon ?? null,
      feature2_title ?? null,
      feature3_icon ?? null,
      feature3_title ?? null,
    ];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Build home data updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
