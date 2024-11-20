import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonItem, IonLabel, IonAccordionGroup, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { TablasService } from '../../service/tablas.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-gestion-encuesta',
  templateUrl: './gestion-encuesta.page.html',
  styleUrls: ['./gestion-encuesta.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonIcon, IonButton, IonAccordionGroup, IonLabel, IonItem, IonAccordion, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class GestionEncuestaPage implements OnInit {

  @Input('select') select = ""
  tablaService = inject(TablasService)

  constructor() { }

  roles = this.tablaService.getRoles();
  usuarios = this.tablaService.getUsuario();
  perfiles = this.tablaService.getPerfiles();
  
  ngOnInit() {
    console.log(this.select)
  }

 

}
