let axios = require("axios")


let getAll = async function (req, res) {

    try {
        
         
         var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        let data=result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// let getId = async function (req, res) {
// let template_id=req.query.template_id
//     try {  
//          var options = {
//             method: "post",
//             url: `https://i.imgflip.com/30b1gx.jpg?template_id=${template_id}`
//         }
//         let result = await axios(options)
//         let data=result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

    let meme= async function(req,res){
        let query=req.query
    
        let website= {
            method: "post",
            url:`https://api.imgflip.com/caption_image?template_id=${query.template_id}&text0=${query.text0}&text1=${query.text1}&username=${query.username}&password=${query.password}`
        }
    
        let result= await axios(website)
    
        console.log(result.data)
    
       res.send(result.data)
    }
    
    
module.exports.meme=meme
// module.exports.getId=getId
module.exports.getAll=getAll