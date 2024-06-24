import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM gallery",
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const requestData = await request.json();
        const { imageName } = requestData;

        const sqlQuery = `
      INSERT INTO gallery (imageName)
      VALUES (?)
    `;
        const values = [imageName];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "image added successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const requestData = await request.json();
        const { id, imageName } = requestData;

        const sqlQuery = `
      UPDATE gallery
      SET imageName = ?
      WHERE id = ?
    `;
        const values = [imageName, id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "image updated successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}


export async function DELETE(request) {
    try {
        const { id } = await request.json();

        const sqlQuery = `
      DELETE FROM gallery
      WHERE id = ?
    `;
        const values = [id];

        const result = await query({
            query: sqlQuery,
            values,
          });
      
          return new Response(JSON.stringify({ status: 200, message: "image deleted successfully", result }), { status: 200 });
        } catch (error) {
          return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
        }
      }
