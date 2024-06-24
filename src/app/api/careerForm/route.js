// import nodemailer from "nodemailer";

// export async function POST(request, res) {
//   const { name, email, phone, position } = await request.json();

//   try {
//     // Create a transporter object using SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "webDevs2024@gmail.com",
//         pass: "fkbt nnro yfnk ngmc", // Replace with your Gmail App Password (not account password)
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: "webDevs2024@gmail.com",
//       to: email,
//       // cc:"info@samaro.in",
//       subject: "New Career Form Submission",
//       html: `
//           <p>Name: ${name}</p>
//           <p>Email: ${email}</p>
//           <p>Phone: ${phone}</p>
//           <p>Position: ${position}</p>
//         `,
//     });

//     return new Response(
//       JSON.stringify({ Success: "Mail sended Suucessfully" }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error }), {
//       status: 500,
//     });
//   }
// }


import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, position } = req.body;

    try {
      const emailParams = {
        from_name: 'webDevs2024@gmail.com', // Replace with your sender email
        to_email: email,
        subject: 'New Career Form Submission',
        message_html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Position: ${position}</p>
        `,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS details
      // const response = await emailjs.send(
      //   'YOUR_SERVICE_ID', // Service ID from EmailJS
      //   'YOUR_TEMPLATE_ID', // Template ID from EmailJS
      //   emailParams,
      //   'YOUR_USER_ID' // User ID from EmailJS
      // );

      console.log('Email sent:', response);

      return res.status(200).json({ Success: 'Mail sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed', details: 'Only POST requests are allowed' });
  }
}
