const mid1= function ( req, res, next) {
    console.log("you are middleware1")
    next()
    res.send({msg:"you are in"})
}

const mid2= function ( req, res, next) {
    console.log("you are middleware2")
    next()
    res.send({msg:"you are in"})
}

const mid3= function ( req, res, next) {
    console.log("you are middleware3")
    next()
    res.send({msg:"you are in"})
}


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
