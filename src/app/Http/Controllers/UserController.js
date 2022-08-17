import UserRepository from "../../Repositories/UserRepository.js";
import UserMail from "../../Mail/UserMail.js";

import User from "../../Core/User.js";

class UserController {
    async store(req, res) {
        const {name, email, role} = req.body;

        const user = await new User(name, email, role).init();

        const model = await UserRepository.store(user);

        await UserMail.firstAccess(user.email, {
            name: user.name,
            token: model.auth['token'],
            email: user.email
        });

        return res.status(201).json({_id: model._id});
    }
}

export default new UserController();