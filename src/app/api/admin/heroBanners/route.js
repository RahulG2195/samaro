// src/controllers/heroBannerController.js
import { query } from "@/utils/Dbconnect";
import upload from "@/utils/multer.middleware";
import { writeFile } from 'fs/promises';

// Function to handle file upload
const uploadImage = async (file) => {
    try {
        const result = await new Promise((resolve, reject) => {
            upload.single('banner_img')(file, {}, (err) => {
                if (err) reject(err);
                resolve();
            });
        });

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `./uploads/${file.originalname}`;
        await writeFile(path, buffer);
        return path;
    } catch (error) {
        throw new Error(`Error uploading image: ${error.message}`);
    }
};

// GET endpoint to fetch data
export async function GET(request) {
    try {
        const category = await query({
            query: "SELECT * FROM herobanner",
            values: [],
        });

        let data = JSON.stringify(category);
        return new Response(data, { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            { status: 500 }
        );
    }
}

// PUT endpoint to update data, including file upload
export async function PUT(request) {
    try {
        const formData = await request.formData();

        const fields = [
            'banner_id', 'banner_title', 'banner_content', 'banner_url', 'button_text', 'banner_img', 'mobileBanner_img'
        ];

        const data = Object.fromEntries(
            fields.map(field => [field, formData.get(field) || null])
        );

        const banner_id = formData.get('banner_id');
        if (!banner_id) {
            throw new Error("Banner ID is required");
        }

        const banner_img_file = formData.get('banner_img');
        if (banner_img_file) {
            const imagePath = await uploadImage(banner_img_file);
            data.banner_img = imagePath;
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
            data.banner_title ?? null,
            data.banner_content ?? null,
            data.banner_url ?? null,
            data.button_text ?? null,
            data.banner_img ?? null,
            data.mobileBanner_img ?? null,
            banner_id
        ];

        const result = await query({
            query: sqlQuery,
            values,
        });

        const responseData = JSON.stringify(result);
        return new Response(responseData, { status: 200 });
    } catch (error) {
        console.error('Error handling PUT request:', error.message);
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            { status: 500 }
        );
    }
}
