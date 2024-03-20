const Auth = require('../model/Auth');
const bcrypt = require('bcrypt');

exports.reg = async (req, res) => {
    const data = req.body;
    // console.log(data)

    try {
        // const checkRecord = await Auth.findOne({ $or: [{ email: data.email }, { name: data.name }] });
        const checkRecord = await Auth.findOne({ email: data.email, name: data.name });
        // console.log(checkRecord)
        if (checkRecord) {
            return res.status(409).json({ status: 409, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = new Auth({ name: data.name, password: hashedPassword, email: data.email });
        await newUser.save();
        console.log("User created:", newUser);
        res.status(201).json({ status: 201, message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body; 
    
    try {
        const user = await Auth.findOne({ email }); 
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password); 
            if (isPasswordValid) {
                res.status(200).json({
                    status: 200,
                    data:user,
                    message: "Successfully logged in"
                });
            } else {
                res.status(401).json({
                    status: 401,
                    message: "Invalid email or password"
                });
            }
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || "Internal server error"
        });
    }
};
