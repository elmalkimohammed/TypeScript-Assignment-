
// The Selectable Planets
type DestinedPlanets = "Mars" | "Moon" | "Saturn" | "X"
// The Selectable Space Stations
type SpaceStations = "ISS" | "SkyLab" | "Mir" | "Salyut 1"
// The Selectable Space Ship Statuses
type States = "Lunched" | "Pending" | "Arrived"

// An Array Containing All Of Our Creatted Astronauts
export let SpaceStation: any[] = [];

// An Array Containing All Of Our Busy Astronauts
export let BusyAstronautCollection: any[] = [];

// For The First Exercice 
type Astronaut = {
    Id : number,
    Name : string,
    Destination : DestinedPlanets
}

// Created Just Not To Mess With The Code Of The Previous Exercices To Include The New Properties
type BusyAstronaut = {
    Id : number,
    Name : string,
    Destination : DestinedPlanets,
    SpaceStation : SpaceStations,
    MissionState : States
}

// SpaceStation Events For Newly Created Astronaut, Astraunots Getting Assigned To A Space Station, And The State Of The Current Mission Of The Mission
type SpaceStationEvents = 
{ type : "Astronaut Created" ; AstronautId : number }                                            |
{ type : "Astraunot Assigned To A Mission" ; AstronautId : number ; AssignedSS : SpaceStations } | 
{ type : "A Space Craft Has Been Lunched" ; AstronautId : number ; StateOfMission : States }     |
{ type : "A Space Craft Is Currently Active" ; AstronautId : number ; StateOfMission : States }  |
{ type : "A Space Craft Has Arrived To The Destination" ; AstronautId : number ; StateOfMission : States } 

export type { Astronaut , BusyAstronaut , DestinedPlanets , SpaceStations , SpaceStationEvents }
