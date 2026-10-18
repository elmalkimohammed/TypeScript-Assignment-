
type DestinedPlanets = "Mars" | "Moon" | "Saturn" | "Titan"

type Astronaut = {
    Id : number,
    Name : string,
    Destination : DestinedPlanets
}

export type { Astronaut , DestinedPlanets }
