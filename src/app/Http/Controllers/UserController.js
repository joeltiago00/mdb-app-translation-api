import UserRepository from "../../Repositories/UserRepository.js";

import User from "../../Core/User.js";

class UserController {
    async store(req, res) {
        const {name, email, password, role} = req.body;

        const user = await new User(name, email, password, role).init();

        const model = await UserRepository.store(user);

        return res.status(201).json({_id: model._id});
    }
}

export default new UserController();