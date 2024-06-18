import { query } from "@/utils/Dbconnect"; // Adjust path to your database module

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

export async function PUT(request) {
  try {
    const requestData = await request.json();
    const {
      id,
      heading,
      icons,
      titles,
      slider_images
    } = requestData;

    console.log("incoming data ",requestData)

    // Construct SQL UPDATE query
    const sqlQuery = `
    UPDATE benefits
    SET
      heading = COALESCE(?, heading),
      icons = COALESCE(?, icons),
      titles = COALESCE(?, titles),
      slider_images = COALESCE(?, slider_images)
    WHERE id = ?
  `;
  
  // Stringify JSON fields to ensure proper formatting
  const values = [
    heading || null,
    icons ? icons.split(',') : null,
    titles ? titles.split(',') : null,
    slider_images ? slider_images.split(',') : null,
    id
  ];
  
  // Replace undefined values with null
  for (let i = 0; i < values.length; i++) {
    if (values[i] === undefined) {
      values[i] = null;
    }
  }
  
  // Execute the query
  const result = await query({
    query: sqlQuery,
    values,
  });
    return new Response(JSON.stringify({ status: 200, message: "Benefits data updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
