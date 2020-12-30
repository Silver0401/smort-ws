// Libraries
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const fs = require("fs")
const https = require("https")
const stripe = require("stripe")
const stripeKey = stripe("sk_test_51I2XfOBwVvvXbSw3wKEvsjnWLq2VvChCW0agoiIwbjTakGMsUTzpclEu2Yl5h4Fxf3Pd3I1umjwNb6Vk3EZZkHtF00xXEHsa5Y")
require("dotenv").config()

// Variables and Inits
const app = express()
let port = process.env.PORT || 5000
app.use(express.json())


// BackEnd and FrontEnd Connections
if (process.env.APP_STATE === "prod") {

    app.use(express.static(path.resolve(__dirname, "./../build")))

    app.get("*/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./../build", "index.html"))
    })

} else {

    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/backendTemplate.html")
    })

}


// Mongo Data Base Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const dataBase = mongoose.connection
dataBase.on("error", error => console.log(error))
dataBase.once("open", () => console.log("Connected to MongooseDB"))


// SSL Certificate Data Fetch
const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, "ssl" ,"server.crt")),
    key: fs.readFileSync(path.join(__dirname, "ssl" ,"server.key")),
}


// Order Routes
const Orders = require("./routes/orders")
app.use("/DataCenter", Orders)


// Payment and Product Session Route
app.post('/DataCenter/PaymentProcedure', async (req, res) => {

  await stripeKey.paymentIntents.create({
    amount: req.body.amount,
    currency: "mxn",
    payment_method: req.body.id,
    confirm: true,
    description: `Pago hecho por ${req.body.Name}, con el correo de ${req.body.Email}`
  })

  .then(() => res.json("Payment Successfull"))
  .catch(err => console.error(`BE pay error${err}`))

})

// Support Route
const Support = require("./routes/support")
app.use("/DataCenter", Support)



// Port Listening

// https.createServer(httpsOptions, app)
//     .listen(port, () => console.log(`App server initalized on port ${port}`))

app.listen(port, () => console.log(`App server initalized on port ${port}`))
