import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
export const User = sequelize.define("User",{
   /*  id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true

    } */ 
//    id is by default created
    name:{
        type:DataTypes.STRING(20),
        allowNull:false

    },
    email:{
        type:DataTypes.STRING(190),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(40),
        allowNull:false,
        
    },
    dob:{
        type:DataTypes.DATEONLY
    }
}) //when defined will be called users because it must be pluralized


