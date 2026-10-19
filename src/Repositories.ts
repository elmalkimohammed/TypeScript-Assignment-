
import Types = require("./Types");

export class AstronautRepository 
{

    public AstronautCollection : any[] = [] ;

    findByMission( ChosenPlanet : Types.DestinedPlanets ) : any {
        for ( var Astr of Types.SpaceStation ) {
            if ( Astr.Destination === ChosenPlanet )
            {
                this.AstronautCollection.push(Astr)
            }
        }
        return this.AstronautCollection
    }
}
