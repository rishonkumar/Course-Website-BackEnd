const mongoose = require("mongoose")

//schema define


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    purchasedCourse: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
})

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    price: Number,
    imgLink: String,
    published: Boolean
})

const User = mongoose.model("Sign", userSchema);
const Admin = mongoose.model("Login", adminSchema);
const Course = mongoose.model("Course", courseSchema)

module.exports = {
    User,
    Admin,
    Course
}
