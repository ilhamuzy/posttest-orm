const router = require("express").Router()
const app = express()
const book = require("./router")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(router)

app.listen(3000,()=>{
    console.log("server berjalan!")
})