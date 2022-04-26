let axios = require("axios")


let getsortedCities = async function (req, res) {

    try {
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
       
       let cityObjArray=[]
       for(i=0;i<cities.length;i++){
           let obj={city:cities[i]} 
        let resp =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1df6ec72a98fd5a483a481b09a955e85`)
        
    console.log(resp.data.main.temp)
        obj.temp=resp.data.main.temp
        cityObjArray.push(obj)

}
       let sorted=cityObjArray.sort(function(a,b){return a.temp-b.temp})
        res.status(200).send({ msg: sorted, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getLondon = async function (req, res) {

    try {
        
         
         var options = {
            method: "get",
            url: ` http://api.openweathermap.org/data/2.5/weather?q=London&appid=1df6ec72a98fd5a483a481b09a955e85`
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
module.exports.getsortedCities = getsortedCities
module.exports.getLondon=getLondon