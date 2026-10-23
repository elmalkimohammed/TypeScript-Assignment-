
import FunctionsFile = require("./Functions")
import { AstronautRepository } from "./Repositories"
import { SpaceCraftLunched } from "./Functions"
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

/* The Third Exercice */
console.log("---------------------------Ex3---------------------------")

let NewlyCreatedBusyAstronaut : TypesFile.BusyAstronaut = {
    Id : 1,
    Name : "Samir",
    Destination : "X",
    SpaceStation : "ISS",
    MissionState : "Lunched"
}

SpaceCraftLunched({ 
    type: "A Space Craft Has Been Lunched",
    AstronautId: NewlyCreatedBusyAstronaut.Id,
    StateOfMission: "Lunched" 
})
/* The Fourth Exercice */
console.log("---------------------------Ex4---------------------------")

let FirstNewlyCreatedBusyAstronaut: TypesFile.BusyAstronaut = {
    Id: 1,
    Name: "Hamid",
    Destination: "Mars",
    SpaceStation: "ISS",
    MissionState: "Pending" // Valid
};

let SecondNewlyCreatedBusyAstronaut: TypesFile.BusyAstronaut = {
    Id: 2,
    Name: "Sarah",
    Destination: "Moon",
    SpaceStation: "Mir",
    MissionState: "Lunched" // Invalid
};
    // Utilizing The Already Defined AstronautRepo Object
AstronautRepo.add(FirstNewlyCreatedBusyAstronaut)
console.log( TypesFile.BusyAstronautCollection )
// AstronautRepo.add(SecondNewlyCreatedBusyAstronaut) // Will Throw An Exception. Needs To Be Commented To Test The Rest Of The Code
/* The Fourth Exercice */
console.log("---------------------------Ex5---------------------------")

// The Cach Will Hit Here Because We Already Searched With 'Saturn' In A Previous Exercice
console.log("First Saturn search:");
console.log(AstronautRepo.findByMission("Saturn"));
// The Cach Will Not Hit Here Because It's The First Time We're Searching With 'Mars
console.log("Mars search:");
console.log(AstronautRepo.findByMission("Mars"));
