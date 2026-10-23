
import { ValidateMissionState , CacheForFindingByMission } from "./Decorators"
import Types = require("./Types");

export class AstronautRepository 
{

    public AstronautCollection : any[] = [] ;

    /* The Method Responisble For Displaying Astronauts From The SpaceStation Array By The Desired Planet */
    @CacheForFindingByMission /* A Decorator That Will Be Caching Any Searched Planet */
    findByMission(ChosenPlanet: Types.DestinedPlanets): Types.Astronaut[] {
        return Types.SpaceStation.filter(
            (Astr: Types.Astronaut) =>
                Astr.Destination === ChosenPlanet
        );
    }

    /* The Method Responsible For Adding Astronauts That Are Already In A Mission Into An Array */
    @ValidateMissionState /* A Decorator That Will Be Cheking Our Mission State Of The Given Astronaut */
    add( Astr : Types.BusyAstronaut ) : any {
        Types.BusyAstronautCollection.push( Astr )
        return Types.BusyAstronautCollection
    }

}
