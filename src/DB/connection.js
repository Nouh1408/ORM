import { Sequelize } from "sequelize"; //pascal case --> classes
const sequelize = new Sequelize("blog", "root", "", {
  dialect: "mysql",
  host: "127.0.0.1",
});
sequelize
  .authenticate()
  .then(()=>{
    console.log("db connection to db");
    
  })
  .catch((err) => {
    console.log("fail to connect", err.message);
  });
 