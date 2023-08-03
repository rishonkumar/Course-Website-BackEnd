const mongoose = require("mongoose")

//schema define


const signupSchema = new mongoose.Schema({
    username: String,
    password: String
})

const loginSchema = new mongoose.Schema({
    username: String,
    password: String
})

const Sign = mongoose.model("Sign", signupSchema);
const Login = mongoose.model("Login", loginSchema);

module.exports = {
    Sign,
    Login
}
