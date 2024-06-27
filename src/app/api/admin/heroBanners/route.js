import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module

export async function GET(request) {
    // console.log("request is ",request)
    // const  id  = request.search;   
    //  console.log("idididid",id)

    //  const params = new URLSearchParams(request.searchParams); 

    //  const id = params.get('id'); 
    //  console.log("id:123", id); 


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
    try {
        const formData = await request.formData();

        const banner_id = formData.get('banner_id'); // Assuming you have banner_id in your request to identify the banner to be updated
        const banner_title = formData.get('banner_title');
        const banner_content = formData.get('banner_content');
        const banner_url = formData.get('banner_url');
        const button_text = formData.get('button_text');
        const banner_img = formData.get('banner_img');
        const mobileBanner_img = formData.get('mobileBanner_img');

        // Ensure banner_id is defined
        if (banner_id === null || banner_id === undefined) {
            throw new Error("Banner ID is required");
        }

        const sqlQuery = `
            UPDATE herobanner
            SET
                banner_title = COALESCE(?, banner_title),
                banner_content = COALESCE(?, banner_content),
                banner_url = COALESCE(?, banner_url),
                button_text = COALESCE(?, button_text),
                banner_img = COALESCE(?, banner_img),
                mobileBanner_img = COALESCE(?, mobileBanner_img)
            WHERE
                banner_id = ?
        `;

        const values = [
            banner_title ?? null,
            banner_content ?? null,
            banner_url ?? null,
            button_text ?? null,
            banner_img ?? null,
            mobileBanner_img ?? null,
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
