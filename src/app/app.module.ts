import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';  
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonGridComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule   
  ],
  providers: [PokemonService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailsComponent]
})
export class AppModule { }
