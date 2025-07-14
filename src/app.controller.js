import {connectDB} from './DB/connection.js'
function bootstrap(app,express){
    app.use(express.json)
    connectDB()
}
// module.exports = bootstrap common js
export default bootstrap 