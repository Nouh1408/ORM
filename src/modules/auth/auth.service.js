import { User } from "../../DB/models/user.model.js";

export const register = async (req,res,next)=>{
   try{
     const {name, email, password, dob} = req.body
     console.log({name, email, password, dob});
     
    const userExist = await User.findOne({where:{email}}) //{if found} | null
    if(userExist){
        throw new Error("user already exist",{cause:409})
    }
    
    const user= User.build({fullname:name, email,password,dob }) //builds a new instance solves a problem called dependency injection + SOLID
    const createdUser = await user.save()
   
  //  const createdUser = await User.create({name, email, password, dob})
   return res.status(201).json({message:"user created successfully", success:true, data:createdUser})
   } catch(error){
    return res.status(error.cause || 500).json({message:error.message, success:true})
   }
 }