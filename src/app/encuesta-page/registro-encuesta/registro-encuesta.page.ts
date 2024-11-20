import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonText, IonInput, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { TablasService } from '../../service/tablas.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-registro-encuesta',
  templateUrl: './registro-encuesta.page.html',
  styleUrls: ['./registro-encuesta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonText, IonInput, IonItem, IonList,IonSelect, IonSelectOption, RouterLink]
})
export class RegistroEncuestaPage implements OnInit {

  @Input('select') select = ""

  
  serviceTabla = inject(TablasService)

  roles = this.serviceTabla.getRoles()
  constructor() { }

  ngOnInit() {
  }

}
