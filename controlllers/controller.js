const jsonToken = require('jsonwebtoken');
const TaskUser = require('../collections/userModel');


const home = async(req, res) => {
    try {
        res.status(200).send("Server is working Properly!")
    } catch (error) {
        res.status(400).send({message: 'Something happened wrong'})
    }
}

const saveUser = async(req, res) => {
    try {
        const user = req.body;
        console.log(user);
            const alreadyExist = await TaskUser.findOne({email: user.email})
            if(!alreadyExist) {
                const userHaveSaved = await TaskUser.create(user);
                res.send(userHaveSaved);
            } else {
                res.send({message: "Having problem"})
            }
    } catch (error) {
        res.status(400).send({message: 'Something happened wrong'})
    }
}


const getUser = async (req, res) => {
    try {
        const email = req.query.email;
        const user = await TaskUser.findOne({email})
        res.send(user)
    } catch (error) {

    }
}


const jwt = async(req, res) => {
    try {
        const email = req.query.email;
            const user = await User.findOne({email: email});
            if(user) {
                const token = jsonToken.sign({email}, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
                return res.send({token : token});
            }
            res.status(403).send(`Unauthorized access`)
    } catch (error) {
        console.log(error.message);
    }
};





module.exports = { home, saveUser,jwt, getUser };