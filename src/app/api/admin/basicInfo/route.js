import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM basic_info WHERE bi_id = 1", // Adjust query as needed
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
      comp_logo,
      email1,
      email2,
      mobile_no_1,
      mobile_no_2,
      facebook_url,
      insta_url,
      linkedin_url,
      youtube_url,
      address,
      map_url,
    } = requestData;

    const sqlQuery = `
      UPDATE basic_info
      SET
        comp_logo = COALESCE(?, comp_logo),
        email1 = COALESCE(?, email1),
        email2 = COALESCE(?, email2),
        mobile_no_1 = COALESCE(?, mobile_no_1),
        mobile_no_2 = COALESCE(?, mobile_no_2),
        facebook_url = COALESCE(?, facebook_url),
        insta_url = COALESCE(?, insta_url),
        linkedin_url = COALESCE(?, linkedin_url),
        youtube_url = COALESCE(?, youtube_url),
        address = COALESCE(?, address),
        map_url = COALESCE(?, map_url)
      WHERE bi_id = 1
    `;

    const values = [
      comp_logo ?? null,
      email1 ?? null,
      email2 ?? null,
      mobile_no_1 ?? null,
      mobile_no_2 ?? null,
      facebook_url ?? null,
      insta_url ?? null,
      linkedin_url ?? null,
      youtube_url ?? null,
      address ?? null,
      map_url ?? null,
    ];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Basic info updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

