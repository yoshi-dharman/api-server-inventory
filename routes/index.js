const express = require("express");
const router = express.Router();

const userInventory = require("./inventory.route")

router.get("/", (req, res) => {
    res.send("<h1 style='text-align:center; padding-top:3rem'>Welcome to my Api Inventory ⊂◉‿◉つ</h1>"+
    "<h3 style='text-align:center;'>/inventory to see the data</h3>")
});

router.use("/inventory", userInventory)

module.exports = router