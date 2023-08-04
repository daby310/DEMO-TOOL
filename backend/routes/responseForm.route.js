let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Student Model
let responseSchema = require("../models/Responseform.js");

router.get("/", (req, res) => {
  responseSchema.find().then((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});
router.post("/save-response",(req,res,next)=>{
  responseSchema.create(req.body,(error,data)=>{
    if(error)
    {
      return next(error);
    }
    else{
      console.log(data);
      res.json(data);
    }
  })
})
module.exports = router;