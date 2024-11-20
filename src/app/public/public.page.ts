import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonList, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonList, RouterLink, IonButton  ]
})
export class PublicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
