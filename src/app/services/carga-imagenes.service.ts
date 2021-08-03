import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item.model';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGEN = 'img';

  constructor(private DB: AngularFirestore) { }

  private guardarImagen( imagen: {nombre: string, url: string} ){

    this.DB.collection(`/${this.CARPETA_IMAGEN}`)
      .add( imagen );
  }

  cargarImagenesFirebase( imagenes: FileItem[] ) {

    console.log(imagenes);

  }

}
