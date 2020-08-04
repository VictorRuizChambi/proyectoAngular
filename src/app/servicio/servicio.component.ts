import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  servicios;

  constructor(
    private servicioService : ServicioService
  ) { }

  ngOnInit() {
    this.servicios = this.servicioService.getServicios();
  }

}