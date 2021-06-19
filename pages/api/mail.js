const mail = require('@sendgrid/mail');


mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function (req, res) {
  const body = JSON.parse(req.body);
  const message = `
    <strong>Name</strong>: ${body.first_name} ${body.last_name} <br><br>
    <strong>Subject</strong>: ${body.first_name} ${body.last_name}<br><br>
    ${body.phone ? `<strong>Phone </strong>: ${body.phone}<br><br>` : ''}
    <strong>message</strong>: ${body.message}<br><br>
  `

  const data = {
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    subject: body.subject,
    html: message
  }

  mail.send(data)
  res.status(200).json({ status: 'Ok' })
}
