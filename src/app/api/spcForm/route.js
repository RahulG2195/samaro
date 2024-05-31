import nodemailer from "nodemailer";

export async function POST(request, res) {
  const { name, email, phone, message, selectedOption } = await request.json();
  try {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webDevs2024@gmail.com",
        pass: "fkbt nnro yfnk ngmc", // Replace with your Gmail App Password (not account password)
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "webDevs2024@gmail.com",
      to: email,
      cc:"sales.assist@samaro.in",
      subject: "New SpcForm Submission",
      html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>
          <p>Selected Option: ${selectedOption}</p>
        `,
    });
    return new Response(
      JSON.stringify({ Success: "Form Submitted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
