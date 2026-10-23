
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

/* Verifying If The Given Element Is Truly One Of The Pre-Defined Four Space Stations */
export function isSpaceStation(value: unknown): value is TypesFile.SpaceStations {
    const validStations: TypesFile.SpaceStations[] = [
        "ISS",
        "SkyLab",
        "Mir",
        "Salyut 1"
    ];

    return typeof value === "string" && validStations.includes(
        value as TypesFile.SpaceStations
    );
}

export function isBusyAstronaut(value: unknown): value is TypesFile.BusyAstronaut {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const candidate = value as Record<string, unknown>;

    const validDestinations: readonly TypesFile.DestinedPlanets[] = [
        "Mars",
        "Moon",
        "Saturn",
        "X"
    ];

    const validStates: readonly TypesFile.BusyAstronaut["MissionState"][] = [
        "Lunched",
        "Pending",
        "Arrived"
    ];

    return (
        typeof candidate.Id === "number" &&
        typeof candidate.Name === "string" &&
        validDestinations.some(planet => planet === candidate.Destination) &&
        isSpaceStation(candidate.SpaceStation) &&
        validStates.some(state => state === candidate.MissionState)
    );
}

export type { NewAstronaut , SpaceCraftLunchedEvent }
