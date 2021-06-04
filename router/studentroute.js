const { json } = require("body-parser");
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
                        as: "haha"
                    }
                }
            ]
        )

        var sum = 0;
        sum = data[0].bangla + data[0].math + 10;
        console.log(sum);

        const updateOneStudent = await stuData.updateOne(
            { _id: data[0]._id },
            { $set: { marks: sum } }
        );

        console.log(updateOneStudent);

        const updated_data = await stuData.find(
            {},
            { marks: 1 }
        ).limit(1);

        res.json({ updated_data, data });


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