import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { nombre: string;  url: string;}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor(public firestore: AngularFirestore) { 

    this.items = firestore.collection('img').valueChanges();

  }

  ngOnInit(): void {
  }

  items: Observable<any[]>;

}
