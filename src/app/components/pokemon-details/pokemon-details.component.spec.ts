import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsComponent ],
      providers:[NgbModal, NgbActiveModal]
    })
    fixture = TestBed.createComponent(PokemonDetailsComponent);   
    component = fixture.componentInstance;   
  }));

   it('# should create', () => {
    expect(component).toBeTruthy();
  }); 
});