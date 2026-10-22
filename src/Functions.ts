
import TypesFile = require("./Types")

/* Creating A New Astronaut */
type NewAstronaut = Omit< TypesFile.Astronaut , "Id" >

/* Event Extraction */
type SpaceCraftLunchedEvent = Extract<TypesFile.SpaceStationEvents , { type : "A Space Craft Has Been Lunched" } >

/* Space Craft Being Lunched Event Handler  */
export function SpaceCraftLunched( SpaceCraftEvent : SpaceCraftLunchedEvent ) : void
{
    console.log( `Astronaut ${SpaceCraftEvent.AstronautId} Has ${SpaceCraftEvent.StateOfMission="Lunched"}` )
}

export type { NewAstronaut , SpaceCraftLunchedEvent }
