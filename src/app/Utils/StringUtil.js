import { v4 as uuidv4 } from 'uuid';

class StringUtil {
    random(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()';

        let result = ' ';

        const charactersLength = characters.length;

        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    uuid() {
        return uuidv4();
    }
}

export default new StringUtil();