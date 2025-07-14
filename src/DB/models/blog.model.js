import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./user.model.js";
export const Blog = sequelize.define("Blog",{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    }

})
let x= {
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
    foreignKey:{
        name:"user",
        allowNull:false
    }
}
User.hasMany(Blog,x)
Blog.belongsTo(User,x)