const express = require("express");
const router = express.Router();
const stuData = require("../model/studentinfo");

//get data
router.get("/", async (req, res) => {
    try {
        const data = await stuData.aggregate(
            [
                {
                    $lookup: 
                    {
                      from: "teachers",
                      localField: "class",
                      foreignField: "cls",
                      as : "haha"  
                    }  
                  }
            ]
        )

        res.json(data);

    } catch (err) {
        res.json({ message: err });
    }
});

//save data
router.post("/", async (req, res) => {
    console.log(req.body);
    const data = new stuData({
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        status: req.body.status,
        position: req.body.position,
        bangla: req.body.bangla,
        math: req.body.math,
        marks: req.body.marks,
        gpa: req.body.gpa,
        date: req.body.date

    });
    try {
        const saveStuInfo = await data.save();
        res.json(saveStuInfo);
        console.log(saveStuInfo);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;