import { TestBed, inject, getTestBed } from "@angular/core/testing";
import { baseUrl, detailsUrl } from "../constants/constants";
import { PokemonService } from "./pokemon.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Pokemon } from "../models/pokemon";
import { PokemonDetails } from "../models/pokemondetails";

describe("PokemonService", () => {
  let injector: TestBed;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    injector = getTestBed();
    service = injector.get(PokemonService);
    httpMock = injector.get(HttpTestingController);
  });  

  it("# should be created", inject(
    [PokemonService],
    (service: PokemonService) => {
      expect(service).toBeTruthy();
    }
  )); 

  it("# method get pokemons should return a collection of pokemons", inject(
    [PokemonService],
    (service: PokemonService) => {
      const Pokemons: Pokemon[] = [
        {
          id: 1,
          name: "venusaur",
          imageLoaded: false,
          sprite: "https://pokeapi.co/api/v2/pokemon/1/",
          detailsUrl: ""
        }
      ];

      service.getPokemon(0, 1).subscribe(pokemon => {
        expect(pokemon.length).toBe(1);
        expect(pokemon).toEqual(Pokemons);
      });

      const mockedRequest = httpMock.expectOne({
        method: "GET",
        url: `${baseUrl}?offset=0&limit=1`
      });

      expect(mockedRequest.request.method).toBe("GET");
      mockedRequest.flush(Pokemons);
      httpMock.verify();
    }
  ));  
});
