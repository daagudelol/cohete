import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService) { }


  ngOnInit() {
  }

}
