
import TypesFile = require("./Types")

/* Creating A New Astronaut */
type NewAstronaut = Omit< TypesFile.Astronaut , "Id" >

export type { NewAstronaut }
