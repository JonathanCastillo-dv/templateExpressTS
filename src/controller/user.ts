import User from '../models/user/user';
import {Response,Request} from 'express';
const getUsers = async (req:Request, res:Response) => {
    const { limit = 5, from = 0 } = req.query;
    const [total, users] = await Promise.all([
        User.find({ status: true }).countDocuments(),
        User.find({ status: true }).limit(Number(limit)).skip(Number(from)),
    ]);
    res.json({
        total,
        users,
    });
};
const postUsers = async (req:Request, res:Response) => {
    const data = req.body;
    const user = new User(data);
    const existUser = await User.findOne({ email: user.email });
    if (existUser) {
        return res.json({
            msg: "Error the email entered already exists!",
        });
    }
    await user.save();
    res.json({
        body: user,
    });
};

export {
    getUsers,
    postUsers,
};
