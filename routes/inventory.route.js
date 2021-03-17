const express = require("express");
const router = express.Router();

const {
    getInven,
    getInvenById,
    addInven,
    deleteInven,
    updateInven
} = require("../controllers/inventory.controllers");

router.get("/", getInven);
router.get("/:id", getInvenById);
router.post("/", addInven);
router.delete("/:id", deleteInven);
router.put("/:id", updateInven);

module.exports = router