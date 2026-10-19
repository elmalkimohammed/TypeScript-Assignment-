
import FunctionsFile = require("./Functions")
import { AstronautRepository } from "./Repositories"
import TypesFile = require("./Types")

/* The First Exercice */
let NewlyCreatedAstronaut : FunctionsFile.NewAstronaut = { 
    Name : "Mohammed",
    Destination : "Saturn"
}
console.log("---------------------------Ex1---------------------------")
console.log(NewlyCreatedAstronaut)

/* The Second Exercice */
console.log("---------------------------Ex2---------------------------")
    // Setting Up Our Main List
TypesFile.SpaceStation.push(NewlyCreatedAstronaut)

NewlyCreatedAstronaut = { 
    Name : "Ahmed",
    Destination : "Mars"
}
TypesFile.SpaceStation.push(NewlyCreatedAstronaut)

NewlyCreatedAstronaut = { 
    Name : "Amine",
    Destination : "X"
}
TypesFile.SpaceStation.push(NewlyCreatedAstronaut)

NewlyCreatedAstronaut = { 
    Name : "Karim",
    Destination : "Saturn"
}
TypesFile.SpaceStation.push(NewlyCreatedAstronaut)
    // Initializing The Object So We Can Use The Method That Searchs By The Mission
const AstronautRepo : AstronautRepository = new AstronautRepository()
const FoundAstronauts = AstronautRepo.findByMission("Saturn")
console.log("   --| Full Array |--")
console.log(TypesFile.SpaceStation)
console.log("   --| Sorted Array |--")
console.log(FoundAstronauts)
