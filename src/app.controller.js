import {connectDB, sequelize} from './DB/connection.js'
import express from 'express'
import { Blog } from './DB/models/blog.model.js'
import {User} from './DB/models/user.model.js'
import authRouter from './modules/auth/auth.controller.js'
function bootstrap(app,express){
    app.use(express.json())
    connectDB()
    // User.sync()
    // Blog.sync()
    sequelize.sync({alter:true})
    app.use('/auth',authRouter)
}
// module.exports = bootstrap common js
export default bootstrap 