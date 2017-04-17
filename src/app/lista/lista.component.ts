import { Component, OnInit } from '@angular/core';
import { TabliceService } from '../tablice.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ TabliceService ]
})
export class ListaComponent implements OnInit {
  fraza: string;
  woj: string;
  tabs;
  constructor(private tabliceService: TabliceService) {
      this.tabs = tabliceService.getTablice();
  }
  ngOnInit() {
  }

}
