const express = require("express");
const router = express.Router();
const Post = require("../model/usermodel");
const Customer = require("../model/customer_model");
const Teacher = require("../model/teacher_model");


//get back all the teacher
router.get("/teacher", async (req, res) => {
  try {
  const retriveTeacher = await  Teacher.find();
  // res.json({result:retriveCustomer});
  res.json(retriveTeacher);
  console.log(retriveTeacher);
  } catch(err) {
    res.json({message: err});
  }

  //console.log("post");
  //res.send("post url");
});



//get back all the customers
router.get("/customer", async (req, res) => {
  try {
  const retriveCustomer = await  Customer.find();
  // res.json({result:retriveCustomer});
  res.json(retriveCustomer);
  console.log(retriveCustomer);
  } catch(err) {
    res.json({message: err});
  }

  //console.log("post");
  //res.send("post url");
});



//update Select and unselect options

router.post("/public/update/select-option", async (req, res) => {
 
  console.log(" in select option " , req.body);
  
  // const post = new Post({
  //   userName: req.body._id,
  //   // contact: req.body.contact,
  //   // password: req.body.password,
  //   // city: req.body.city,
  //   // country: req.body.country,
  //   // code: req.body.code,

  // });
 
  // try{
  //  const savePost = await post.save();
  //  res.json(savePost);
  //  console.log(savePost);
  // }
  // catch(err){
  //   res.json({message: err});
  // }

});

//update a post

router.patch( '/:postId', async (req, res) => { 
  try {
    const updateOnePost =await  Post.updateOne({_id: req.params.postId}, {$set: {userName: req.body.userName , contact: req.body.contact , password: req.body.password  , city: req.body.city, country: req.body.country, code: req.body.code  } });
    res.json(updateOnePost);
    console.log(updateOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//delete a post

router.delete( '/:postId', async (req, res) => { 
  try {
    const deleteOnePost =await  Post.remove({_id: req.params.postId});
    res.json(deleteOnePost);
    console.log(deleteOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//get a specific post
router.get( '/:postId', async (req,res) => {
  console.log(req.params.postId);
  try {
   const retriveOnePost = await  Post.findById(req.params.postId);
   res.json(retriveOnePost);
   console.log(retriveOnePost);
   } catch(err) {
     res.json({message: err});
     //console.log(err);
   }

});

//get back all the post
router.get("/", async (req, res) => {
  try {
  const retrivePost = await  Post.find();
  res.json(retrivePost);
  console.log(retrivePost);
  } catch(err) {
    res.json({message: err});
    //console.log(err);
  }

  //console.log("post");
  //res.send("post url");
});

//submit all the post
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    userName: req.body.userName,
    contact: req.body.contact,
    password: req.body.password,
    city: req.body.city,
    country: req.body.country,
    code: req.body.code,

  });
 
  try{
   const savePost = await post.save();
   res.json(savePost);
   console.log(savePost);
  }
  catch(err){
    res.json({message: err});
  }
});



router.get('/',(req, res) =>{
  console.log('inside router');
res.send('inside router');
});


router.get('/ttt',(req, res) =>{
  console.log('test ttt');
res.send('home ttt');
});

module.exports = router;