
// The Selectable Planets
type DestinedPlanets = "Mars" | "Moon" | "Saturn" | "X"

// An Array Containing All Of Our Creatted Astronauts
export let SpaceStation: any[] = [];

type Astronaut = {
    Id : number,
    Name : string,
    Destination : DestinedPlanets
}

export type { Astronaut , DestinedPlanets }
