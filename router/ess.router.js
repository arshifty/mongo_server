const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

router.get("/information", async (req, res) => {
    try {
        let data = await [
            {                
                "roll": "1",
                "dept": "cse"
            },
            {                
                "roll": "2",
                "dept": "cse"
            },
            {                
                "roll": "3",
                "dept": "cse"
            },
            {                
                "roll": "4",
                "dept": "cse"
            },
            {                
                "roll": "5",
                "dept": "cse"
            },
            {                
                "roll": "6",
                "dept": "cse"
            },
            {                
                "roll": "7",
                "dept": "cse"
            },
            {                
                "roll": "8",
                "dept": "cse"
            },
        ]
        res.json({ data: data });
    } catch (error) {
        console.log(error);
    }
});

const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('a471f2db02ad3d14b7eba6cf5cb84fef5e76146f', {});

router.get("/bitly/practice", async (req, res) => {
    try {
        let result;
        result = await bitly.shorten('http://127.0.0.1:3006/ess/information');
        console.log(result);
        res.json({ message: "done" });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

/*
following :  https://www.npmjs.com/package/bitly
for this api   http://127.0.0.1:3006/ess/information
{
  created_at: '2021-09-03T13:39:43+0000',
  id: 'bit.ly/3jCTO0V',
  link: 'https://bit.ly/3jCTO0V',
  custom_bitlinks: [],
  long_url: 'http://127.0.0.1:3006/ess/information',
  archived: false,
  tags: [],
  deeplinks: [],
  references: { group: 'https://api-ssl.bitly.com/v4/groups/Bk47bZakjJs' }
}
*/

/*  bitly retrive 
{
    "created_at":"2021-09-03T13:39:43+0000","id":"bit.ly/3jCTO0V",
    "link":"https://bit.ly/3jCTO0V","custom_bitlinks":[],
    "long_url":"http://127.0.0.1:3006/ess/information","archived":false,"created_by":"smartsolutionsie",
    "client_id":"a5e8cebb233c5d07e5c553e917dffb92fec5264d",
    "tags":[],
    "deeplinks":[],
    "references":{"group":"https://api-ssl.bitly.com/v4/groups/Bk47bZakjJs"}
}
*/