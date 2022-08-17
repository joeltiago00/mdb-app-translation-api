import bcrypt from "bcrypt";

class CryptUtil {
    async generate(password) {
        return await bcrypt.hash(password, 10);
    }

    async compare(encryptedString, string) {
        return await bcrypt.compare(encryptedString, string);
    }
}

export default new CryptUtil();