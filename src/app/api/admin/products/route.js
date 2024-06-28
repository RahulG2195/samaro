import { query } from "@/utils/Dbconnect";
import { writeFile } from "fs/promises";
import upload from "@/utils/multer.middleware";


const uploadImage = async (file) => {
    try {
        await upload.single(file);
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `./uploads/${file.name}`;
        await writeFile(path, buffer);
    } catch (error) {
        console.log('error: ', error.message);
    }
}
export async function GET(request) {
    try {
        const category = await query({
            // query: "SELECT products.*,category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id",
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
        const formData = await request.formData();
        const fields = [
            'productname', 'frontImage', 'prod_images', 'catalogue', 'code',
            'prod_finish', 'size', 'spiece', 'seo_url', 'thikness', 'variation',
            'm2pack', 'no_of_groves', 'places', 'plank', 'layer', 'color', "otherImagesFile", "image"
        ];

        const data = Object.fromEntries(
            fields.map(field => [field, formData.get(field) || null])
        );

        // Extract frontImageFile and otherImagesFile separately
        const frontImageFile = formData.get('frontImageFile');
        const otherImagesFiles = formData.getAll('image');

        console.log("--------------------------");
        console.log("data: " + JSON.stringify(data));
        console.log("--------------------");

        if (frontImageFile) {
            data.frontImage = await uploadImage(frontImageFile);
            data.frontImage = frontImageFile.name;
        }

        console.log("------------2--------------");
        // const otherImagesFiles = formData.getAll('image');
        let imageNames = [];
        if (otherImagesFiles && otherImagesFiles.length > 0) {
            for (const image of otherImagesFiles) {
                // console.log("IMagE ",image.name)
                await uploadImage(image);  // Ensure this function handles image upload and returns the image name
                imageNames.push(image.name);
            }
        }

        console.log("------------3--------------", imageNames);

        const seo = data.productname ? data.productname.replace(/\s+/g, '_') : null;
        data.otherImages = imageNames.length > 0 ? imageNames.join(',') : null;


        console.log("dataFinal: " + JSON.stringify(data));

        const sqlQuery = `
            INSERT INTO products (
                prod_name, prod_code, seo_url, prod_catalogue, variation, color, 
                place, thikness, layer, prod_images, prod_image2, prod_finish, 
                prod_size, prod_spiece, no_of_groves, m2pack, plank
            ) VALUES (${Array(17).fill('?').join(', ')})
        `;

        const values = [
            data.productname, data.code, seo, data.catalogue, data.variation,
            data.color, data.places, data.thikness, data.layer, data.frontImage,
            data.otherImages, data.prod_finish, data.size, data.spiece,
            data.no_of_groves, data.m2pack, data.plank
        ];

        const result = await query({ query: sqlQuery, values });

        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const requestData = await request.formData();
        const fields = [
            'productId', 'productname', 'frontImage', 'prod_images', 'catalogue', 'code',
            'prod_finish', 'size', 'spiece', 'seo_url', 'thikness', 'variation',
            'm2pack', 'no_of_groves', 'places', 'plank', 'layer', 'color', "otherImagesFile", "image"
        ];

        const editdata = Object.fromEntries(
            fields.map(field => [field, requestData.get(field) || null])
        );

        const productId = editdata.productId;

        // Fetch current data from the database
        const currentDataQuery = `SELECT * FROM products WHERE prod_id = ?`;
        const currentData = await query({ query: currentDataQuery, values: [productId] });

        if (!currentData || currentData.length === 0) {
            return new Response(JSON.stringify({ status: 404, message: "Product not found" }), { status: 404 });
        }

        const currentDataObj = currentData[0];

        // Extract frontImageFile and otherImagesFile separately
        const frontImageFile = requestData.get('frontImageFile');
        const otherImagesFiles = requestData.getAll('image' || 'otherImages');

        if (frontImageFile) {
            await uploadImage(frontImageFile);
            editdata.frontImage = frontImageFile.name;
        }

        let imageNames = [];
        if (otherImagesFiles && otherImagesFiles.length > 0) {
            for (const image of otherImagesFiles) {
                await uploadImage(image);
                imageNames.push(image.name);
            }
        }

        editdata.otherImages = imageNames.length > 0 ? imageNames.join(',') : null;

        // Merge editdata with currentData
        const mergedData = { ...currentDataObj, ...editdata };

        const {
            productname, frontImage, otherImages, catalogue, code,
            prod_finish, size, spiece, seo_url, thikness, variation,
            m2pack, no_of_groves, places, plank, layer, color
        } = mergedData;

        console.log("Merged data: ", mergedData);

        const replaceSpacesWithUnderscores = (str) => str ? str.replace(/\s+/g, '_') : null;
        const seo = replaceSpacesWithUnderscores(productname);

        const values = [
            productname, code, seo, catalogue, variation, color, places, thikness,
            layer, frontImage, otherImages, prod_finish, size, spiece, no_of_groves,
            m2pack, plank, productId
        ];

        // Build SQL update query with only non-null values
        let sqlQuery = 'UPDATE products SET ';
        const updateFields = [
            'prod_name', 'prod_code', 'seo_url', 'prod_catalogue', 'variation', 'color', 
            'place', 'thikness', 'layer', 'prod_images', 'prod_image2', 'prod_finish', 
            'prod_size', 'prod_spiece', 'no_of_groves', 'm2pack', 'plank'
        ];

        const updateValues = [];
        updateFields.forEach((field, index) => {
            if (values[index] !== null) {
                sqlQuery += `${field} = ?, `;
                updateValues.push(values[index]);
            }
        });
        
        sqlQuery = sqlQuery.slice(0, -2); // Remove last comma and space
        sqlQuery += ' WHERE prod_id = ?';
        updateValues.push(productId);

        console.log("Final SQL query: ", sqlQuery);
        console.log("SQL query values: ", updateValues);

        const category = await query({ query: sqlQuery, values: updateValues });

        const responseData = JSON.stringify(category);
        return new Response(responseData, { status: 200 });
    } catch (error) {
        console.error("Error in PUT method: ", error);
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            { status: 500 }
        );
    }
}





export async function DELETE(request) {
    try {
        // const id = await request.json();
        const requestBody = await request.json();
        const { id } = requestBody;     
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

