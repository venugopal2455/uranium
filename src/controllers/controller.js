const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");


const createUser = async function (req, res) {
  try {
      let data = req.body
      console.log(data)
      if ( Object.keys(data).length != 0) {
          let savedData = await userModel.create(data)
          res.status(201).send({ msg: savedData })
      }
      else res.status(400).send({ msg: "BAD REQUEST"})
  }
  catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
  }
}
// ++++++++++++++++++++++++++====================================
const loginUser = async function (req, res) {
try{
    let userName = req.body.emailId;
  let password = req.body.password;
  console.log(userName)
  console.log(password)
  if(Object.keys(userName&&password).length!==0){
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user){
   
      res.status(404).send({msg: "username or the password is not corerct"})
    
    }
    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );

  res.status(201).send({ status: true, data: token });
}
// else res.status(400).send({msg:"this isnot valid "})
}
  catch(error){
    console.log("this is error",error.message)
    res.status(500).send({msg:"error",err:error.message})
  }
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++
const getUserData = async function (req, res) {
  
  
 try{
  let userId = req.params.userId;
  
  if(userId){
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
  res.staus(400).send({ msg: "No such user exists" });
  }
  
  res.status(200).send({ msg: userDetails });
  }}
  catch(error){
    console.log("this is error",error.message)
    res.status(500).send({msg:"hello server please do",error:error.message})

  }
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const updateUser = async function (req, res) {
  
  try{let userId = req.params.userId;
  let user = await userModel.findById(userId);
    if (!user) {
     res.status(400).send("No such user exists");

  }

  let userData = req.body;
  if(Object.keys(userData).length==0){
    res.status(400).send({msg:"please fill all the fields"})
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(202).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  console.log("this is error",error.message)
  res.status(500).send({msg:"hello server please do",error:error.message})
}
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==
const deleteUser = async function (req, res) {
    try{let userId = req.params.userId;
    let user = await userModel.findById(userId);
      if (!user) {
      res.status(400).send("No such user exists");
    }
  
    let userData = req.body;
    if(Object.keys(userData).length==0){
      res.status(400).send({msg:"please some data in the fields"})
    }
    let  remove= await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
    
    
    res.status(200).send({ msg:"updated the data", data:user });
  }
    catch(error){
      console.log("this is error",error.message)
      res.status(500).send({msg:"hello server please do",error:error.message})
    }
  };
  
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;