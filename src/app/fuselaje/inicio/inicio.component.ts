import { Component, OnInit, NgModule } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
@NgModule({
  imports: [
    CommonModule
  ]
})
export class InicioComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService) { }

  ngOnInit() {
  }

}

