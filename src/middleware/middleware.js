const jwt = require("jsonwebtoken");
const mid1=async function(req,res,next){
 try{ let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
  
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  let userId = req.params.userId;
  
  if(decodedToken.userId!==userId){
    res.status(101).send({status:false,data:"u r not authentication to change the details "})
  }}
  catch(err){
    res.status(400).send({msg:"please enter a valid token",err:err.message})
  }

next();
} 
module.exports.mid1= mid1;