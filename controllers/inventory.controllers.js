const users = require("../../express/models/user");
const inventory = require("../models/inventory");

module.exports = {
    getInven: (req,res) => {
        res.json({
            message : "GET inventory",
            inventory
        })
    },

    getInvenById: (req, res) => {
        const id = req.params.id;
        const inven = inventory.find(item => item.id == id);

        if(inven != undefined){
            res.json({
                message : "GET inventory by ID",
                inven
            })
        }
        else{
            res.json({
                message : "Not found ID to GET",
            })
        }
    },

    addInven: (req, res) => {
        const inven = {
            id : inventory[inventory.length -1].id + 1,
            inventory : req.body.inventory
        }

        inventory.push(inven);
        res.json({
            message : "POST inventory",
            inventory
        })
    },

    deleteInven: (req, res) => {
        const id = req.params.id;
        let deleteID;

        inventory.map((item, index) => {
            if(item.id == id){
                deleteID = index;
            }
        });

        if(deleteID != undefined){
            inventory.splice(deleteID,1);
            res.json({
                message : "DELETE inventory",
                inventory
            });
        }
        else{
            res.json({
                message : "Not found ID to DELETE",
                inventory
            });
        }
    },

    updateInven: (req, res) => {
        const inven = req.body;
        const id = req.params.id;
        let editID;

        users.map((item, index) => {
            if(item.id == id){
                editID = index;
            }
        });

        if(editID != undefined){
            inventory[editID].inventory = inven.inventory;
            res.json({
                message : "PUT inventory",
                inventory
            });
        }
        else{
            res.json({
                message : "Not found ID to PUT",
                inventory
            });
        }
    },

}