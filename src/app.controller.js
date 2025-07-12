import {} from './DB/connection.js'
function bootstrap(app,express){
    app.use(express.json)
}
// module.exports = bootstrap common js
export default bootstrap