
const userModel = require('../models/user_model')

const user = {

    registration: async (req, res) => {
        console.log("hiiii",req.body)
        const methods = req.method;
        switch (methods) {
            case "POST": 
                try {
                    const user = new userModel(req.body);
                    user.save().then((user, err) => {
                        if (err) { return console.log(err); }
                       console.log("user",user)
                    });
                } catch (err) {
                    return res.status(500).json({ msg: err.message });
                }
        }
        
    },

};

module.exports = user; 
