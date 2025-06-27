const campaignModel = require('./models/campaign');
const sendEmail = require('./utils/nodemailer');


const handlePostCampaign = async function (req, res) {
    try {
        let { title, message, scheduledTime, recipients } = req.body;
        const arr = recipients.split(',')
            .map(ele => {
                return ele.trim();
            })
            .filter(ele => {
                return ele != '';
            })
            .map((email) => {
                return { email, status: 'pending' }
            });
        console.log(arr);

        const campaignDoc = await campaignModel.create({
            title,
            message,
            scheduledTime: new Date(scheduledTime),
            recipients: arr
        });


        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        const delay = campaignDoc.scheduledTime.getTime() - new Date().getTime();

        if (delay < 0) {
            return res.json({ error: "Scheduled time must be in the future." });
        }
        setTimeout(async function () {
            for (let element of campaignDoc.recipients) {
                if (!isValidEmail(element.email)) {
                    element.status = 'failed';
                    continue;
                }
                const status = await sendEmail({
                    title,
                    message,
                    email: element.email
                });

                element.status = status ? 'sent' : 'failed';
            };
            await campaignDoc.save();
        }, delay);
        res.render('campaign-created', campaignDoc.toObject());

    } catch (err) {
        console.log(err.message);
        res.json({ error: err.message });
    }
}
const handleGetCampaigns = async function (req, res) {
    const campaigns = await campaignModel.find({});
    res.render('campaign', { campaigns });
}

module.exports = {
    handlePostCampaign,
    handleGetCampaigns
}