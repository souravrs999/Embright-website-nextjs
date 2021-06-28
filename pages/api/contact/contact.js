import { mailTemplate } from "../../../utils/contact-mail-template";

export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE_PROVIDER,
    auth: {
      user: process.env.SMTP_USER_MAIL,
      pass: process.env.SMTP_USER_PASS,
    },
  });

  const mailData = {
    from: process.env.CONTACT_FROM_MAIL,
    to: process.env.CONTACT_TO_MAIL,
    subject: `Embright enquiry from ${req.body.name}`,
    text: req.body.subject + " | Sent from: " + req.body.name,
    html: mailTemplate(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.subj,
      req.body.msg
    ),
  };

  if (req.method === "POST") {
    await transporter
      .sendMail(mailData)
      .then(() => {
        res.status(200).json({ status: "OK" });
      })
      .catch((err) => {
        res.status(405).json({ status: "FAILED" });
      });
  } else {
    res.status(405).end("Method not Allowed");
  }
}
