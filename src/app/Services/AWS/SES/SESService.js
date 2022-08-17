import aws from "aws-sdk";
import mail from "../../../../config/mail.js";
import fs from "fs";
import util from "util";

class SESService {
    _ses;

    constructor() {
        this._ses = new aws.SES({
            accessKeyId: mail.ses.access_key_id,
            secretAccessKey: mail.ses.secret_access_key,
            region: mail.ses.region
        });
    }

    async send(address, subject, template_file, replacements) {
        const mail_body = await this._replaceHTML(template_file, replacements);

        return await this._ses.sendEmail({
            Source: address,
            Destination: {
                'ToAddresses': [address]
            },
            Message: {
                Body: {Html: {Data: mail_body}},
                Subject: {Data: subject}
            }
        }).promise()
            .then((_) => {
                return true;
            })
            .catch((err) => {
                console.log(err);

                return false;
            });
    }

    async _replaceHTML(template, replacements) {
        const readFile = util.promisify(fs.readFile);

        let file = String(await readFile(process.cwd() + `/resources/views/emails/${template}`, {encoding: "utf-8"}));

        Object.keys(replacements).forEach(key => {
            file = file.replace(`{{${key}}}`, replacements[key]);

        });

        return file;
    }
}

export default new SESService();