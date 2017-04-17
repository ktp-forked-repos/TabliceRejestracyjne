import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { TabliceService } from './tablice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TabliceService ]
})
export class AppComponent {
  title = 'app works!';
}
