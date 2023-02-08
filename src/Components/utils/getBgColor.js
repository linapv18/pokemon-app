
import {rgba} from "polished"

const getBgColor = (type, opacity = 1) => 
{
  switch (type) {
    case "normal":
      return rgba("#A8A77A", opacity);
    case "fire": 
      return rgba("#EE8130", opacity);
    case "water": 
      return rgba("#6390F0", opacity);
    case "electric":
      return rgba("#F7D02C", opacity);
    case "grass":
      return rgba("#7AC74C", opacity);
    case "ice":
      return rgba("#96D9D6", opacity);
    case "fighting":
      return rgba("#C22E28", opacity);
    case "poison":
      return rgba("#A33EA1", opacity);
    case "ground":
      return rgba("#E2BF65", opacity);
    case "flying":
      return rgba("#A98FF3", opacity);
    case "psychic":
      return rgba("#F95587", opacity);
    case "bug":
      return rgba("#A6B91A", opacity);
    case "rock":
      return rgba("#B6A136", opacity);
    case "ghost":
      return rgba("#735797", opacity);
    case "dragon":
      return rgba("#6F35FC", opacity);
    case "dark":
      return rgba("#705746", opacity);
    case "steel":
      return rgba("#B7B7CE", opacity);
    case "fairy":
      return rgba("#D685AD", opacity);
      
    default:
      return rgba("#A8A77A", opacity);
  }
}

export default getBgColor