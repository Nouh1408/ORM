import { Sequelize } from "sequelize"; //pascal case --> classes
const sequelize = new Sequelize("mysql://uj5iiazm007fwrb5:Up7gtu96TspjInFyzBMm@bfwxcgtuzrzftlx4ai7o-mysql.services.clever-cloud.com:3306/bfwxcgtuzrzftlx4ai7o");
function connectDB(){
  sequelize
  .authenticate()
  .then(()=>{
    console.log("db connected success to db");
    
  })
  .catch((err) => {
    console.log("fail to connect", err.message);
  });
}

export {connectDB, sequelize}
 