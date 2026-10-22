
import { ValidateMissionState } from "./Decorators"
import Types = require("./Types");

export class AstronautRepository 
{

    public AstronautCollection : any[] = [] ;

    /* The Method Responisble For Displaying Astronauts From The SpaceStation Array By The Desired Planet */
    findByMission( ChosenPlanet : Types.DestinedPlanets ) : any {
        for ( var Astr of Types.SpaceStation ) {
            if ( Astr.Destination === ChosenPlanet )
            {
                this.AstronautCollection.push(Astr)
            }
        }
        return this.AstronautCollection
    }

    /* The Method Responsible For Adding Astronauts That Are Already In A Mission Into An Array */
    @ValidateMissionState /* A Decorator That Will Be Cheking Our Mission State Of The Given Astronaut */
    add( Astr : Types.BusyAstronaut ) : any {
        Types.BusyAstronautCollection.push( Astr )
        return Types.BusyAstronautCollection
    }

}
