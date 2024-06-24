import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM newsletter",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { news_category, news_img, title, date, author, video, status } = requestData;

    const sqlQuery = `
      INSERT INTO newsletter (news_category, news_img, title, date, author, video, status)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [news_category, news_img, title, new Date(date), author, video, status];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter added successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const requestData = await request.json();
    const { news_id, news_category, news_img, title, date, author, video, status } = requestData;

    const sqlQuery = `
      UPDATE newsletter
      SET news_category = ?, news_img = ?, title = ?, date = ?, author = ?, video = ?, status = ?
      WHERE news_id = ?
    `;
    const values = [news_category, news_img, title, new Date(date), author, video, status, news_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { news_id } = await request.json();

    const sqlQuery = `
      DELETE FROM newsletter
      WHERE news_id = ?
    `;
    const values = [news_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}