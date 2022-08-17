import yup from "yup";

class UserRequest {
    async store(req, res, next) {
        const validator = yup.object().shape({
            name: yup.string().min(3).max(60).required(),
            email: yup.string().email().required(),
            password: yup.string().min(8).max(16).required(),
            role: yup.string().min(4).max(5).required()
        });

        try {
            await validator.validate(req.body);
        } catch (err) {
            return res.status(422).json({errors: err.errors});
        }

        await next();
    }
}

export default new UserRequest();