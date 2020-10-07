const MongoLib= require("../lib/mongodb")


class StationsService {
    constructor(){
        this.mongodb= new MongoLib()
        this.collection = "stations"
    }
    async getAll({estado}){
        const query = {}
        const stations =await this.mongodb.getAll(this.collection, query)
        return stations           
    };
    async getOne(_id){
        const station  = await this.mongodb.getOne(this.collection, _id )
        console.log(station);
        return station
    }
}


module.exports= StationsService