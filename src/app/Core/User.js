import bcrypt from "bcrypt";

export default class User {
    _name;
    _email;
    _password;
    _role;

    constructor(name, email, password, role) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._role = role;
    }

    /**
     * Needs call this function to encrypt password
     *
     * @returns {Promise<User>}
     */
    async init() {
        await this.setPassword();

        return this;
    }

    toObject() {
        return {
            name: this._name,
            email: this._email,
            password: this._password,
            role: this._role,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
        };
    }

    async setPassword() {
        this._password = await bcrypt.hash(this._password, 10);
    }
}
