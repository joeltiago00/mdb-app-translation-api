import SESService from "../Services/AWS/SES/SESService.js";

class UserMail {
    async firstAccess(emailAddress, replacements) {
        return await SESService.send(emailAddress, 'Primeiro acesso', 'user-created.html', replacements);
    }
}

export default new UserMail();