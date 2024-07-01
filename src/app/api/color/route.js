import { query } from "@/utils/Dbconnect";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM color ",
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const requestData = await request.formData();
        const { clrCode, image } = Object.fromEntries(requestData.entries());;

        const sqlQuery = `
      INSERT INTO color (clrCode, image)
      VALUES (?, ?)
    `;
        const values = [clrCode, image];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Color added successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}


export async function PUT(request) {
    try {
        const requestData = await request.formData();
        const { id, clrCode, image } = Object.fromEntries(requestData.entries());
        const sqlQuery = `
      UPDATE color
      SET clrCode = ?, image = ?
      WHERE id = ?
    `;
        const values = [clrCode, image, id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ status: 404, message: "Color not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ status: 200, message: "Color updated successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const requestData = await request.json();
        const { id } = requestData;

        const sqlQuery = `
      DELETE FROM color
      WHERE id = ?
    `;
        const values = [id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ status: 404, message: "Color not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ status: 200, message: "Color deleted successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

