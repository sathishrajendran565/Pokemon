export class PokemonDetails {
    height: number;
    weight: number;    
    name: string;
    sprites: any[];
    abilities: any[];
    

    static fromDetailsResponse(json: any): PokemonDetails {
      const details = new PokemonDetails();
      details.height = json.height;
      details.weight = json.weight;
      details.name = json.name;
      details.sprites = json.sprites;
      details.abilities = json.abilities;
      return details;
    }  
  }