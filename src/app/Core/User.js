import CryptUtil from "../Utils/CryptUtil.js";
import StringUtil from "../Utils/StringUtil.js";
import DateUtil from "../Utils/DateUtil.js";

export default class User {
    _name;
    _email;
    _password;
    _role;

    constructor(name, email, role) {
        this._name = name;
        this._email = email;
        this._password = StringUtil.random(16);
        this._role = role;
    }

    /**
     * This function needs to be called after instantiation to generate hash of password
     *
     * @returns {Promise<User>}
     */
    async init() {
        this._password = await CryptUtil.generate(this._password);

        return this;
    }

    toObject() {
        return {
            name: this._name,
            email: this._email,
            password: this._password,
            role: this._role,
            auth: {
                first_login: true,
                token: StringUtil.uuid(),
                token_expires_at:  DateUtil.addHours(new Date(), 3)
            },
            created_at: new Date(),
            deleted_at: null,
        };
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get role() {
        return this._role;
    }
}
