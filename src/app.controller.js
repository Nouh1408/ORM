import {connectDB} from './DB/connection.js'
import {User} from './DB/models/user.model.js'
function bootstrap(app,express){
    app.use(express.json)
    connectDB()
    User.sync()
}
// module.exports = bootstrap common js
export default bootstrap 