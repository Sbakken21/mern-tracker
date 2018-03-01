const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor(email, content) {
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.subject = 'Password Reset';
        this.from_email = new helper.Email('no-reply@desolate-lake-47207.heroku.com');
        this.body = new helper.Content('text/html', content);
        this.recipient = new helper.Email(email);

        this.addContent(this.body);
        const personalize = new helper.Personalization();
        personalize.addTo(this.recipient);
        this.addPersonalization(personalize);

    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;