import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module

export async function GET(request) {


    try {
        const category = await query({
            query: "SELECT * FROM herobanner",
            values: [],
        });

        let data = JSON.stringify(category);
        return new Response(data, {
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                message: error.message,
            })
        );
    }
}

export async function PUT(request) {
    console.log("in put request");
    try {
        const requestData = await request.json();
        console.log("the request data: ", requestData);
        
        const {
            banner_id, // Assuming you have banner_id in your request to identify the banner to be updated
            banner_title,
            banner_content,
            banner_url,
            banner_img,
            mobileBanner_img,
        } = requestData;

        console.log("here is the editing data: ", requestData);

        // Ensure banner_id is defined
        if (banner_id === undefined) {
            throw new Error("Banner ID is required");
        }

        const sqlQuery = `
            UPDATE herobanner
            SET
                banner_title = ?,
                banner_content = ?,
                banner_url = ?,
                banner_img = ?,
                mobileBanner_img = ?
            WHERE
                banner_id = ?
        `;

        const values = [
            banner_title !== undefined ? banner_title : null,
            banner_content !== undefined ? banner_content : null,
            banner_url !== undefined ? banner_url : null,
            banner_img !== undefined ? banner_img : null,
            mobileBanner_img !== undefined ? mobileBanner_img : null,
            banner_id
        ];

        const result = await query({
            query: sqlQuery,
            values,
        });

        const data = JSON.stringify(result);
        return new Response(data, {
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                message: error.message,
            }),
            { status: 500 }
        );
    }
}
