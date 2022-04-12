let addToArray= function (req, res) {
   
   
   
    let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   let x=req.body
  players.filter((item)=>{
   if(item.name===x.name)
    return res.send('this is already exits')
       
   });
    players.push(x)
    console.log(x)
    res.send( players )                                                                 
    }
  


module.exports.addToArray= addToArray