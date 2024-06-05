import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module

export async function GET(request) {


    try {
        const category = await query({
            query: "SELECT * FROM products",
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
export async function POST(request) {
    try {
        const requestData = await request.json();
        const {
            productname,
            frontImage,
            otherImages,
            catalogue,
            code,
            prod_finish,
            size,
            spiece,
            seo_url,
            thikness,
            variation,
            m2pack,
            grove,
            places,
            plank,
            layer,
            color,
        } = requestData;
        console.log("this data want to post", requestData)

        const sqlQuery = `
      INSERT INTO products (
        prod_name,
        prod_code,
        seo_url,
        prod_catalogue,
        variation,
        color,
        place,
        thikness,
        layer,
        prod_images,
        prod_image2,
        prod_finish,
        prod_size,
        prod_spiece,
        no_of_groves,
        m2pack,
        plank
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        productname || null,
        code || null,
        productname || null,
        catalogue || null,
        variation || null,
        color || null,
        places || null,
        thikness || null,
        layer || null,
        frontImage || null, // Assuming 'frontImage' contains the URL
        otherImages || null,  // Convert array to JSON string
        prod_finish || null,
        size || null,
        spiece || null,
        grove || null,
        m2pack || null,
        plank || null,
    ];

        const category = await query({
            query: sqlQuery,
            values,
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
        const id = await request.json();
        console.log("reqs",id);
        
        const category = await query({
            query: "DELETE FROM products WHERE prod_id = ?",
            values: [id],
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