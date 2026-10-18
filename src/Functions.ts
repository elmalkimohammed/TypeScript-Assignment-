
import TypesFile = require("./Types")

function NewAstronaut( GivenId : number , GivenName : string , GivenDestination : TypesFile.DestinedPlanets ) {
    let AstronautObj : TypesFile.Astronaut = { Id : GivenId , Name : GivenName , Destination : GivenDestination }
    return AstronautObj
}

export = { NewAstronaut }
