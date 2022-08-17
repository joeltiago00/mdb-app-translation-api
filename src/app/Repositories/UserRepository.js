import UserModel from "../Models/User.js";

class UserRepository {
    _model = UserModel;

    async store(User) {
        try {
            return await this._model.create(User.toObject());
        } catch (err) {
            console.log(err.errors);
        }
    }
}

export default new UserRepository();