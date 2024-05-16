import nodemailer from "nodemailer";

export async function POST(request, res) {
  const { name, email, phone, message, selectedOption } = await request.json();
  console.log("Email: " + email);

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
      to: "recipient@example.com",
      subject: "New SpcForm Submission",
      html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>
          <p>Selected Option: ${selectedOption}</p>
        `,
    });

    console.log("Message sent: %s", info.messageId);
    return new Response(
      JSON.stringify({ Success: "Form Submitted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
