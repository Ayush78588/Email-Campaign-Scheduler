let nodemailer = require('nodemailer');


async function sendEmail(data) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    let subject, html;

    subject = data.title;
    html = data.message;


    let obj = {
        from: process.env.EMAIL_ID,
        to: data.email,
        subject,
        html
    }
    try {
        let info = await transporter.sendMail(obj);
        console.log(info);
        return true;
    }
    catch (err) {
        console.log(err.message);
        return false;
    }

}
module.exports = sendEmail;     