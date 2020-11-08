require('dotenv').config();

const User = require('../models/user.models');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

exports.RegisterUser = async (req, res) => {
    const { username, email, password } = req.body;
    const pwHash = await bcryptjs.hash(password, 10)

    //!check available username & email
    let emailUser = await User.findOne({ email: email })
    let usernameUser = await User.findOne({ username: username })

    if (usernameUser) {
        return res.status(404).json({
            status: false,
            message: 'Username already registered'
        })
    }

    if (emailUser) {
        return res.status(404).json({
            status: false,
            message: 'Email already registered'
        })
    }

    //! variable yang kiri dari userSchema di models, dan yang kanan dari const di atas
    const user = new User({
        username: username,
        email: email,
        password: pwHash
    })

    user.save()

    return res.status(201).json({
        status: true,
        message: 'Create user succesfully'
    })
}

exports.LoginUser = async (req, res) => {
    const { username, password } = req.body;
    const dataUser = await User.findOne({ $or: [{ username: username }, { email: username }] })
    // console.log(dataUser)

    //! check user in db
    if (dataUser) {
        //* convert hash to string
        const pwUser = await bcryptjs.compare(password, dataUser.password)
        //! check password
        if (pwUser) {
            //! desc for _id regist to jwt
            const data = {
                id: dataUser._id
            }
            const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET)
            return res.status(200).json({
                message: 'Login Success',
                id: dataUser._id,
                token: token
            })

        } else {
            return res.status(404).json({
                message: 'Wrong password'
            })
        }
    } else {
        return res.status(404).json({
            message: 'Username or Email not found'
        })
    }


}

//Get 1 user from session, req.id dari midleware
exports.getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.id })
    return res.status(200).json({
        status: true,
        data: user
    })
}