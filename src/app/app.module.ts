import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FilterPipe } from './filter.pipe';
import { WojewodztwoPipe } from './wojewodztwo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FilterPipe,
    WojewodztwoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
