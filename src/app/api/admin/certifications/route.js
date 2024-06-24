import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM certifications",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { logo } = requestData;

    const sqlQuery = `
      INSERT INTO certifications (logo)
      VALUES (?)
    `;
    const values = [logo];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification added successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.json();
    const { id, logo } = requestData;

    const sqlQuery = `
      UPDATE certifications
      SET logo = ?
      WHERE id = ?
    `;
    const values = [logo, id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    const sqlQuery = `
      DELETE FROM certifications
      WHERE id = ?
    `;
    const values = [id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
