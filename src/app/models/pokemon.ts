import { detailsUrl } from "../constants/constants";

export class Pokemon {
    id: number;
    sprite: string;    
    name: string;
    detailsUrl : string;
    imageLoaded:boolean;

    static fromResponse(json: any, index: number): Pokemon {
      const pokemon = new Pokemon();
      pokemon.id = index;
      pokemon.name = json.name;
      pokemon.imageLoaded = false;
      pokemon.sprite = detailsUrl + index + '.png'
      pokemon.detailsUrl = json.url;
      return pokemon;
    }
  
  }