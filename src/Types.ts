
type MissionPlanets = "Mars" | "Moon" | "Saturn" | "Titan"

type Astronaut = {
    Id : number,
    Name : string,
    Mission : MissionPlanets
}

export type { Astronaut }
