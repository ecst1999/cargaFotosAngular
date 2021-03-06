import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreDrop: boolean = false;
  archivos: FileItem[] = [];

  constructor(public _cargaimagenesService: CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagenes(){

    this._cargaimagenesService.cargarImagenesFirebase( this.archivos );
  }

  pruebaSobreElemento( event ){

    console.log(event);

  }

  limpiarArchivos(){
    this.archivos = [];
  }

}
