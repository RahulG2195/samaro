import { query } from "@/utils/Dbconnect";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM whysamaro_benifits",
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const requestData = await request.json();
        const { id, point_heading, subpoints, logo } = requestData;

        const sqlQuery = `
        UPDATE whysamaro_benifits
        SET point_heading = ?, subpoints = ?, logo = ?
        WHERE id = ?
      `;

        const values = [
            point_heading ?? null,
            subpoints ?? null,
            logo ?? null,
            id
        ];

        await query({ query: sqlQuery, values });

        return new Response(JSON.stringify({ status: 200, message: "Benefit updated successfully" }), { status: 200 });
    } catch (error) {
        console.error('Error updating benefit:', error);
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}