const router = require("express").Router()
let Order = require("./../models/order.model.js")

// Register Order

router.route("/PlaceOrder").post((req,res) => {

    Order.findOne({Name: req.body.Name}, async (err,doc) => {
        if (err) throw err
        if (doc) res.send("Order of user already exists")
        if (!doc) {
            const Name = req.body.Name
            const Email = req.body.Email
            const Phone = req.body.Phone
            const SiteEspecifications = req.body.SiteEspecifications
            const PageStyleDetails = req.body.PageStyleDetails
            const PaymentInfo = req.body.PaymentInfo
            
            const newOrder = new Order({
                Name : Name,
                Email : Email,
                Phone : Phone,
                SiteEspecifications : SiteEspecifications,
                PageStyleDetails : PageStyleDetails,
                PaymentInfo : PaymentInfo,
            })

            newOrder.save()
                .then(() => res.json("Order succesfully placed"))
                .catch(err => res.status(400).json(`This is a BE ERROR: ${err}`))
        }
    })
})



module.exports = router