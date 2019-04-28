import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonGridComponent } from './pokemon-grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;
  let pokemonSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PokemonGridComponent ],
      providers:[PokemonService]
    });
    fixture = TestBed.createComponent(PokemonGridComponent);
    pokemonSpy = spyOn(PokemonService.prototype, 'getPokemon').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# should create component', () => {
    expect(component).toBeTruthy();
  });

  it('# should call pokemon service getPokemon method', () => {     
    fixture.componentInstance.ngOnInit();
    expect(pokemonSpy).toHaveBeenCalled(); 
  });
});


